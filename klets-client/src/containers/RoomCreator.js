import React from 'react'
import {connect} from 'react-redux'

class RoomSelector extends React.Component {
    static propTypes = {
        /* Connected via react-redux */
    }

    render() {
        return (
            <div className="RoomCreator">
                <button id="RoomCreatorButton">Go</button>
                <div id="RoomCreatorInputDiv">
                    <input type="text" placeholder="Create a room"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedRoom: state.selectedRoom,
    rooms: state.rooms
})

export default connect(mapStateToProps)(RoomSelector)
