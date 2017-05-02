export const TOAST_MESSAGE = 'TOAST_MESSAGE'
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS'
export const SELECT_ROOM = 'SELECT_ROOM'
export const INVALIDATE_ROOM_MESSAGES = 'INVALIDATE_ROOM_MESSAGES'
export const RECEIVE_ROOM_MESSAGES = 'RECEIVE_ROOM_MESSAGES'

/**
 * Display an error notification to the user with the specified text
 * @param text Notification message
 * @param error Error object
 */
export const toastError = (text, error) => ({
    type: TOAST_MESSAGE,
    text,
    error
})

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

export const postRoomMessage = (roomName, userName, text) => dispatch => {
    const body = {
        message: {
            _id: Date.now(),
            roomName: roomName,
            userName: userName,
            text: text
        }
    };

    fetch('http://localhost:3030/messages', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json' // todo: find out why header is not actually being set
        },
        body: JSON.stringify(body)
    })
        .then(response => dispatch(fetchRoomMessages(roomName)))
        .catch(err => dispatch(toastError('Failed to post message', err)))
}