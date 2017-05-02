import {combineReducers} from 'redux'
import {SELECT_ROOM, RECEIVE_ROOMS, INVALIDATE_ROOM_MESSAGES, RECEIVE_ROOM_MESSAGES} from '../actions'

const selectedUser = (state = 'Rob', action) => {
    switch (action.type) {
        default:
            return state
    }
}

const selectedRoom = (state = 'The Soapbox', action) => {
    switch (action.type) {
        case SELECT_ROOM:
            return action.selectedRoom
        default:
            return state
    }
}

const rooms = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ROOMS:
            return action.rooms
        default:
            return state
    }
}

const roomMessages = (state = [], action) => {
    switch (action.type) {
        case INVALIDATE_ROOM_MESSAGES:
            return []
        case RECEIVE_ROOM_MESSAGES:
            return action.roomMessages
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedUser,
    selectedRoom,
    rooms,
    roomMessages
})

export default rootReducer
