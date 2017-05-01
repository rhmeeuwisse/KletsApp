module.exports = function message(_id, roomName, userName, text) {
    return {
        _id: _id,
        roomName: roomName,
        userName: userName,
        text: text
    }
};