import React from 'react'
import {connect} from 'react-redux'
import '../components/Messages.css'

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
            this.createMessage()
    }

    handleCreateMessageClick = (e) => {
        e.preventDefault();
        this.createMessage()
    }

    createMessage = () => {
        alert('Creating message: "' + this.state.messageText + '"');
    }

    render() {
        return (
            <div className="MessageCreator">
                <button id="MessageCreatorButton" onClick={this.handleCreateMessageClick}>Post</button>
                <div id="MessageCreatorInputDiv">
                    <input type="text" placeholder="Write something, anything..."
                           onChange={this.handleMessageTextChange}
                           onKeyUp={this.handleMessageTextKeyUp} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedRoom: state.selectedRoom,
    rooms: state.rooms
})

export default connect(mapStateToProps)(MessageCreator)
