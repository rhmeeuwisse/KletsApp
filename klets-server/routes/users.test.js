var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../app');
var accountsRepo = require('../repository/accounts');

var testApp = supertest(app);

describe('route /users/me', function () {
    describe('GET', function () {
        beforeEach(function() {
            accountsRepo.__set([
                {_id: 1, userName: 'user1', password: 'pass1'}
            ]);
        });
        it('Should authenticate', function (done) {
            testApp.get('/users/me')
                .expect(401)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect('Unauthorized', done);
        });
        it('Should respond with user info', function (done) {
            testApp.get('/users/me')
                .set('Authorization', basicAuth('user1', 'pass1'))
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({userName: 'user1'}, done);
        })
    });
});

function basicAuth(userId, password) {
    return 'Basic ' + new Buffer(userId + ':' + password).toString('base64');
}
