//var util = require('util');

/**
 * Generic Http error
 * @param status Http status code
 * @param message
 * @constructor
 */
function HttpError(status, message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = 'HttpError';
    this.status = status;
    this.message = message;
}

HttpError.prototype = Object.create(Error.prototype);
HttpError.prototype.constructor = HttpError;

HttpError.prototype.toString = function () {
    return this.status + ' ' + this.message;
};

module.exports = HttpError;
