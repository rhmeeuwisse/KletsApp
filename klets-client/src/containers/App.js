import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RoomSelector from '../containers/RoomSelector'
import RoomMessages from './RoomMessages'

class App extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <RoomSelector />
                <RoomMessages />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedRoom, rooms, roomMessages} = state
    return {
        selectedRoom,
        rooms,
        roomMessages
    }
}

export default connect(mapStateToProps)(App)
