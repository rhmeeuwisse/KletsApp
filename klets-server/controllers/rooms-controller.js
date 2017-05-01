var HttpError = require('../lib/http-error');
var messagesRepo = require('../repository/messages-repo');

module.exports.list = function (req, res, next) {

    var roomNames = messagesRepo.getRoomNames();

    res.json({
        roomNames: roomNames
    });

};