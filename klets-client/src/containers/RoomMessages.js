import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {invalidateRoomMessages, fetchRoomMessages} from '../actions'
import MessagesList from '../components/MessagesList'

class RoomMessages extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        roomMessages: PropTypes.array
    }

    componentDidMount() {
        const {dispatch, selectedRoom} = this.props
        dispatch(fetchRoomMessages(selectedRoom)) //todo: dispatch fetchRoomsIfNeeded
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRoom !== this.props.selectedRoom) {
            const {dispatch, selectedRoom} = nextProps
            dispatch(invalidateRoomMessages(selectedRoom))
            dispatch(fetchRoomMessages(selectedRoom)) //todo: dispatch fetchRoomsIfNeeded
        }
    }

    render() {
        const messages = this.props.roomMessages
        if (messages) {
            return (<MessagesList messages={messages} />)
        } else {
            return <p>There's nothing here but the sound of crickets...</p>
        }
    }
}

const mapStateToProps = state => {
    const {selectedRoom, roomMessages} = state
    return {
        selectedRoom,
        roomMessages
    }
}

export default connect(mapStateToProps)(RoomMessages)
