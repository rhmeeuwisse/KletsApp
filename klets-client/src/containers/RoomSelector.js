import React from 'react'
import {connect} from 'react-redux'
import {selectRoom, fetchRooms} from '../actions'
import RoomsList from '../components/RoomsList'
import RoomCreator from '../containers/RoomCreator'

class RoomSelector extends React.Component {
    static propTypes = {
        /* Connected via react-redux */
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchRooms()) //todo: dispatch fetchRoomsIfNeeded
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRoom !== this.props.selectedRoom) {
            const {dispatch} = nextProps
            dispatch(fetchRooms()) //todo: dispatch fetchRoomsIfNeeded
        }
    }

    handleRoomChange = nextRoom => {
        this.props.dispatch(selectRoom(nextRoom))
    }

    render() {
        const {selectedRoom, rooms} = this.props
        return (
            <div className="RoomSelector">
                <RoomCreator />
                <RoomsList rooms={rooms} selectedRoom={selectedRoom} onRoomClick={this.handleRoomChange}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedRoom: state.selectedRoom,
    rooms: state.rooms
})

export default connect(mapStateToProps)(RoomSelector)
