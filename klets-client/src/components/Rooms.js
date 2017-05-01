import React from 'react'
import PropTypes from 'prop-types'

const Rooms = ({rooms, selectedRoom}) => (
    <ul>
        {rooms.map((room, i) => {
            const selectedColor = (room === selectedRoom) ? "blue" : undefined;
            return <li key={i} style={{color: selectedColor}}>{room}</li>
        })}
    </ul>
)

Rooms.propTypes = {
    selectedRoom: PropTypes.string.isRequired,
    rooms: PropTypes.array.isRequired
}

export default Rooms
