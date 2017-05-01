var messageRepo = require('../repository/message-repo');

module.exports.create = function (req, res, next) {
    var message = req.body.message;

    messageRepo.save(message);

    res.sendStatus(201);
};
