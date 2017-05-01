var messageRepo = require('../../repository/message-repo');

module.exports.list = function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*').json({
        rooms: messageRepo.getRoomNames()
    });
};

module.exports.listRoomMessages = function (req, res, next) {
    var roomName = req.params.roomName;
    res.set('Access-Control-Allow-Origin', '*').json({
        messages: messageRepo.getMessagesByRoom(roomName)
    });
};
