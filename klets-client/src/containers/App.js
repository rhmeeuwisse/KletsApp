import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectReddit, fetchPostsIfNeeded, invalidateReddit} from '../actions'
import {receiveRooms} from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import RoomSelector from '../containers/RoomSelector'

class App extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
        selectedReddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {dispatch, selectedReddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const {dispatch, selectedReddit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    handleChange = nextReddit => {
        this.props.dispatch(selectReddit(nextReddit))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const {dispatch, selectedReddit} = this.props
        dispatch(invalidateReddit(selectedReddit))
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    handleLoadRoomsClick = e => {
        e.preventDefault()

        const {dispatch} = this.props
        dispatch(receiveRooms(['foo', 'bar', 'baz']))
    }

    render() {
        const {selectedReddit, posts, isFetching, lastUpdated} = this.props
        const isEmpty = posts.length === 0
        return (
            <div>
                <RoomSelector />
                <br/>
                <Picker value={selectedReddit}
                        onChange={this.handleChange}
                        options={['reactjs', 'frontend']}/>
                <p>
                    {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                    }
                    {!isFetching &&
                    <a href="#"
                       onClick={this.handleRefreshClick}>
                        Refresh
                    </a>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedRoom, rooms} = state
    const {selectedReddit, postsByReddit} = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedRoom,
        rooms,
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
