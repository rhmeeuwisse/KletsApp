import React from 'react'
import {connect} from 'react-redux'
import {postRoomMessage, selectRoom} from '../actions'

class RoomSelector extends React.Component {
    static propTypes = {
        /* Connected via react-redux */
    }

    constructor(props) {
        super(props);
        this.state = {
            newRoomName: ''
        }
    }

    handleRoomTextChange = (e) => {
        this.setState({
            newRoomName: e.target.value
        })
    }

    handleCreateRoomClick = (e) => {
        e.preventDefault();
        this.handleCreateRoom()
    }

    handleCreateRoom = () => {
        const newRoomName = this.state.newRoomName.trim();
        if (newRoomName.length !== 0) {
            this.setState({
                newRoomName: ''
            });
            this.props.dispatch(postRoomMessage(newRoomName, 'Klets',
                this.props.selectedUser + ' created room ' + newRoomName + ' at ' + (new Date().toLocaleTimeString()) + '.'
            ));
            this.props.dispatch(selectRoom(newRoomName))
        }
    }

    render() {
        return (
            <div className="RoomCreator">
                <button id="RoomCreatorButton" onClick={this.handleCreateRoomClick}>Go</button>
                <div id="RoomCreatorInputDiv">
                    <input type="text" placeholder="Get a room!"
                           value={this.state.newRoomName}
                           onChange={this.handleRoomTextChange}/>
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

export default connect(mapStateToProps)(RoomSelector)
