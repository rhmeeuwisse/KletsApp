var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../app');
var messagesRepo = require('../repository/messages-repo');

var testApp = supertest(app);

describe('route /rooms', function () {

    const message1 = {
        _id: 'message1',
        roomName: 'room1',
        userName: 'user1',
        text: 'lorem1'
    };
    const message2 = {
        _id: 'message2',
        roomName: 'room2',
        userName: 'user2',
        text: 'lorem2'
    };
    const message3 = {
        _id: 'message3',
        roomName: 'room3',
        userName: 'user3',
        text: 'lorem3'
    };

    describe('GET', function () {
        it('Should respond with room names sorted', function (done) {
            messagesRepo.__set([
                message3, message1, message2
            ]);

            testApp.get('/rooms')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({roomNames: [
                    'room1', 'room2', 'room3'
                ]}, done);
        })
    });
});

function basicAuth(userId, password) {
    return 'Basic ' + new Buffer(userId + ':' + password).toString('base64');
}
