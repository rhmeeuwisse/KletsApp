import React from 'react'
import RoomMessages from '../containers/RoomMessages'
import './App.css'

const MessagesPane = () => (
    <section className="RightPane MessagesPane">
        <RoomMessages />
    </section>
)

MessagesPane.propTypes = {}

export default MessagesPane
