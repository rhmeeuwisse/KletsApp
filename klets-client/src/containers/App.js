import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AppHeader from '../components/AppHeader'
import RoomsPane from '../components/RoomsPane'
import RoomPane from '../components/MessagesPane'
import AppFooter from '../components/AppFooter'
import './Reset.css'
import './Page.css'

class App extends Component {
    static propTypes = {
        selectedRoom: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="PageContainer">
                <AppHeader />
                <RoomsPane />
                <RoomPane />
                <AppFooter />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedRoom, rooms, roomMessages} = state
    return {
        selectedRoom,
        rooms,
        roomMessages
    }
}

export default connect(mapStateToProps)(App)
