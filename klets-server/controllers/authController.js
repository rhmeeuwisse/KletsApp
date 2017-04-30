var HttpError = require('../lib/http-error');
var accountsRepo = require('../repository/accounts');

/**
 * Checks the Authorization header against the database.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports.authenticate = function (req, res, next) {

    var authorization = req.get('Authorization');
    if (!authorization) return next(new HttpError(401, 'Unauthorized'));

    var basic = parseBasicAuth(authorization);
    if (!basic) return next(new HttpError(400, 'Authorization broken'));

    var account = accountsRepo.findByUserName(basic.userId);
    if (!account || account.password !== basic.password)
        return next(new HttpError(401, 'Unauthorized'));

    req.authenticatedUserName = basic.userId;

    next(); // authenticated: nothing to see here, move along
};

function parseBasicAuth(authorization) {
    var parts = authorization.split(' ');
    if (parts.length !== 2) return;

    var scheme = parts[0];
    if (scheme.toLowerCase() !== "basic") return;

    var param = new Buffer(parts[1], 'base64').toString();
    var sep = param.indexOf(':');
    if (sep < 0) return;

    return {
        userId: param.slice(0, sep),
        password: param.slice(sep + 1)
    };
}
