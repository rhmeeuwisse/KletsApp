import React from 'react'
import RoomSelector from '../containers/RoomSelector'
import './App.css'

const RoomsPane = () => (
    <section className="LeftPane RoomsPane">
        <RoomSelector />
    </section>
)

RoomsPane.propTypes = {}

export default RoomsPane
