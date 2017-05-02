import React from 'react'
import RoomSelector from '../containers/RoomSelector'
import './Style.css'

const RoomsPane = () => (
    <section className="LeftPane Rooms-pane">
        <RoomSelector />
    </section>
)

RoomsPane.propTypes = {}

export default RoomsPane
