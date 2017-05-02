import React from 'react'
import RoomMessages from '../containers/RoomMessages'
import MessageCreator from '../containers/MessageCreator'
import './App.css'

const MessagesPane = () => (
    <section className="RightPane MessagesPane">
        <div className="MessagesContainer">
            <MessageCreator />
            <RoomMessages />
        </div>
    </section>
)

MessagesPane.propTypes = {}

export default MessagesPane
