export const RECEIVE_ROOMS = 'RECEIVE_ROOMS'
export const SELECT_ROOM = 'SELECT_ROOM'
export const INVALIDATE_ROOM_MESSAGES = 'INVALIDATE_ROOM_MESSAGES'
export const RECEIVE_ROOM_MESSAGES = 'RECEIVE_ROOM_MESSAGES'

export const selectRoom = (selectedRoom) => ({
    type: SELECT_ROOM,
    selectedRoom
})

export const receiveRooms = (rooms) => ({
    type: RECEIVE_ROOMS,
    rooms
})

export const fetchRooms = () => dispatch => {
    return fetch(`http://localhost:3030/rooms`)
        .then(response => response.json())
        .then(json => dispatch(receiveRooms(json.rooms)))
}

export const invalidateRoomMessages = (selectedRoom) => ({
    type: INVALIDATE_ROOM_MESSAGES,
    selectedRoom
})

export const receiveRoomMessages = (roomMessages) => ({
    type: RECEIVE_ROOM_MESSAGES,
    roomMessages: roomMessages
})

export const fetchRoomMessages = (selectedRoom) => dispatch => {
    return fetch(`http://localhost:3030/rooms/${selectedRoom}/messages`)
        .then(response => response.json())
        .then(json => dispatch(receiveRoomMessages(json.messages)))
}

export const createRoomMessage = (roomName, userName, text) => dispatch => {
    dispatch(receiveRoomMessages([{
        _id: 1,
        roomName: roomName,
        userName: userName,
        text: text
    }]))
}