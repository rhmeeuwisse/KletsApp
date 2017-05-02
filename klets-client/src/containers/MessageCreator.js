import React from 'react'
import {connect} from 'react-redux'
import '../components/Messages.css'

class MessageSelector extends React.Component {
    static propTypes = {
        /* Connected via react-redux */
    }

    render() {
        return (
            <div className="MessageCreator">
                <button id="MessageCreatorButton">Post</button>
                <div id="MessageCreatorInputDiv">
                    <input type="text" placeholder="Write something, anything..."/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedRoom: state.selectedRoom,
    rooms: state.rooms
})

export default connect(mapStateToProps)(MessageSelector)
