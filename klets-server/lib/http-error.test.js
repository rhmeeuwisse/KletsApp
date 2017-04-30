var HttpError = require('./http-error');

var assert = require('chai').assert;

describe('HttpError', function () {
    it('should inherit from Error and have its properties', function () {
        var err = new HttpError(400, 'Fubar');
        assert.isTrue(err instanceof Error);
        assert.isTrue(err instanceof HttpError);
        assert.equal(err.name, 'HttpError');
        assert.equal(err.status, 400);
        assert.equal(err.message, 'Fubar');
        assert.equal(err.toString(), '400 Fubar');
        assert.isDefined(err.stack);
    })
});
