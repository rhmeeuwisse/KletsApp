import React from 'react'
import PropTypes from 'prop-types'
import './Rooms.css'

const MessagesList = ({messages}) => {

    return (<div className="MessagesList">
        <ul>
            {messages.map((message, i) => (
                <li key={i} className="MessageListItem">
                    <span className="MessageUserName">{message.userName}/</span>
                    <br/>
                    <span className="MessageText" >{message.text}</span>
                </li>
            ))}
        </ul>
    </div>);

}

MessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default MessagesList
