var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../app');

var testApp = supertest(app);

describe('route /users/me', function () {
    describe('GET', function () {
        it('Should authenticate', function (done) {
            testApp.get('/users/me')
                .expect(401)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect('Unauthorized', done);
        });
        it('Should respond with user info', function (done) {
            testApp.get('/users/me')
                .set('Authorization', basicAuth('rob', 'S3cr1t'))
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({userName: 'rob'}, done);
        })
    });
});

function basicAuth(userId, password) {
    return 'Basic ' + new Buffer(userId + ':' + password).toString('base64');
}
