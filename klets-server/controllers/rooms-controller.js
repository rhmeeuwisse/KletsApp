var messagesRepo = require('../repository/messages-repo');

module.exports.list = function (req, res, next) {
    res.json({
        roomNames: messagesRepo.getRoomNames()
    });
};

module.exports.listRoomMessages = function (req, res, next) {
    var roomName = req.params.roomName;
    res.json({
        messages: messagesRepo.findByRoomName(roomName)
    });
};
