import React from 'react'
import {connect} from 'react-redux'
import '../components/Messages.css'
import {postRoomMessage} from '../actions'

class MessageCreator extends React.Component {
    static propTypes = {
        /* Connected via react-redux */
    }

    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        }
    }

    handleMessageTextChange = (e) => {
        this.setState({
            messageText: e.target.value
        })
    }

    handleMessageTextKeyUp = (e) => {
        if (e.keyCode === 13)
            this.handleCreateMessage()
    }

    handleCreateMessageClick = (e) => {
        e.preventDefault();
        this.handleCreateMessage()
    }

    handleCreateMessage = () => {
        const messageText = this.state.messageText.trim();
        if (messageText.length !== 0) {
            this.setState({
                messageText: ''
            });
            this.props.dispatch(postRoomMessage(this.props.selectedRoom, this.props.selectedUser, messageText));
        }
    }

    render() {
        return (
            <div className="MessageCreator">
                <button id="MessageCreatorButton" onClick={this.handleCreateMessageClick}>Post</button>
                <div id="MessageCreatorInputDiv">
                    <input type="text" placeholder="Write something, anything..."
                           value={this.state.messageText}
                           onChange={this.handleMessageTextChange}
                           onKeyUp={this.handleMessageTextKeyUp} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedUser: state.selectedUser,
    selectedRoom: state.selectedRoom,
    rooms: state.rooms
})

export default connect(mapStateToProps)(MessageCreator)
