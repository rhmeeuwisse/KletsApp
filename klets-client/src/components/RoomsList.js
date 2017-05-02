import React from 'react'
import PropTypes from 'prop-types'
import './Rooms.css'

const RoomsList = ({rooms, selectedRoom, onRoomClick}) => (
    <ul className="RoomsList">
        {rooms.map((room, i) => {
            const className = (room === selectedRoom) ? "Highlighted" : undefined;
            return <li key={i} className={className} onClick={() => onRoomClick(room)}>
                {room}
            </li>
        })}
    </ul>
)

RoomsList.propTypes = {
    rooms: PropTypes.array.isRequired,
    selectedRoom: PropTypes.string.isRequired,
    onRoomClick: PropTypes.func.isRequired
}

export default RoomsList
