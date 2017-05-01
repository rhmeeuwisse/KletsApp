var messageRepo = require('../repository/message-repo');

module.exports.list = function (req, res, next) {
    res.json({
        roomNames: messageRepo.getRoomNames()
    });
};

module.exports.listRoomMessages = function (req, res, next) {
    var roomName = req.params.roomName;
    res.json({
        messages: messageRepo.findByRoomName(roomName)
    });
};
