import React from 'react'
import RoomMessages from '../containers/RoomMessages'
import './Style.css'

const MessagesPane = () => (
    <section className="RightPane Messages-pane">
        <RoomMessages />
    </section>
)

MessagesPane.propTypes = {}

export default MessagesPane
