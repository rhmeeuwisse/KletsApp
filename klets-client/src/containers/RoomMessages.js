import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {clearRoomMessages, fetchRoomMessages} from '../actions'
import MessagesList from '../components/MessagesList'

class RoomMessages extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        roomMessages: PropTypes.array
    }

    componentDidMount() {
        const {dispatch, selectedRoom} = this.props
        dispatch(fetchRoomMessages(selectedRoom)) //todo: dispatch fetchRoomsIfNeeded
        this.startPoll()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRoom !== this.props.selectedRoom) {
            const {dispatch} = this.props
            dispatch(clearRoomMessages(this.props.selectedRoom))
            dispatch(fetchRoomMessages(nextProps.selectedRoom)) //todo: dispatch fetchRoomsIfNeeded
        }
    }

    componentWillUnmount() {
        this.stopPoll()
    }

    startPoll() {
        this.timeoutId = setTimeout(() => {
            this.props.dispatch(fetchRoomMessages(this.props.selectedRoom))
            this.startPoll()
        }, 2000);
    }

    stopPoll() {
        clearTimeout(this.timeoutId);
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
    return {
        selectedRoom: state.selectedRoom,
        roomMessages: state.roomMessages
    }
}

export default connect(mapStateToProps)(RoomMessages)
