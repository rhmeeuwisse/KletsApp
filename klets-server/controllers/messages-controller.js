var HttpError = require('../lib/http-error');
var messageRepo = require('../repository/message-repo');

module.exports.create = function (req, res, next) {
    var message = req.body.message;
    checkDefined(message, 'message');
    checkDefined(message._id, 'message._id');
    checkDefined(message.userName, 'message.userName');
    checkDefined(message.roomName, 'message.roomName');
    checkDefined(message.text, 'message.text');

    messageRepo.save(message);

    res.sendStatus(201);
};

function checkDefined(value, fieldName) {
    if (typeof value === 'undefined')
        throw new HttpError(400, 'Missing field: ' + fieldName);
    return value;
}