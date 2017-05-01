import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectRoom, receiveRooms} from '../actions'
import Picker from '../components/Picker'
import Rooms from '../components/Rooms'

class RoomSelector extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired
    }

    componentDidMount() {
        //const {dispatch} = this.props
        //dispatch(receiveRooms(['foo', 'bar', 'baz'])) //todo: dispatch fetchRoomsIfNeeded
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRoom !== this.props.selectedRoom) {
            //const {dispatch, selectedRoom} = this.props
            //dispatch(receiveRooms(['foo', 'bar', 'baz'])) //todo: dispatch fetchRoomsIfNeeded
        }
    }

    handleRoomChange = nextRoom => {
        this.props.dispatch(selectRoom(nextRoom))
    }

    handleRefreshRoomsClick = e => {
        e.preventDefault()

        const {dispatch} = this.props
        dispatch(receiveRooms(['foo', 'bar', 'baz']))
    }

    render() {
        const {selectedRoom, rooms} = this.props
        return (
            <div>
                <Picker value={selectedRoom}
                        onChange={this.handleRoomChange}
                        options={rooms}/>

                <button onClick={this.handleRefreshRoomsClick} >Refresh rooms</button>
                <Rooms rooms={rooms} selectedRoom={selectedRoom}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedRoom} = state
    const {rooms} = state
    return {
        selectedRoom,
        rooms
    }
}

export default connect(mapStateToProps)(RoomSelector)
