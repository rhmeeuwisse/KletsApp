import React from 'react'
import PropTypes from 'prop-types'

const Rooms = ({rooms}) => (
    <ul>
        {rooms.map((room, i) =>
            <li key={i}>{room}</li>
        )}
    </ul>
)

Rooms.propTypes = {
    rooms: PropTypes.array.isRequired
}

export default Rooms
