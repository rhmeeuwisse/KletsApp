var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../app');
var messageRepo = require('../repository/message-repo');

var testApp = supertest(app);

const message1 = message('message1', 'room1', 'user1', 'lorem1');
const message2 = message('message2', 'room2', 'user2', 'lorem2');
const message3 = message('message3', 'room3', 'user3', 'lorem3');
const message4 = message('message4', 'room3', 'user1', 'lorem4');
const message5 = message('message5', 'room3', 'user2', 'lorem5');

describe('route /rooms', function () {

    describe('GET', function () {
        it('Should respond with room names sorted', function (done) {
            messageRepo.__set([
                message3, message1, message2
            ]);

            testApp.get('/rooms')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({
                    roomNames: [
                        'room1', 'room2', 'room3'
                    ]
                }, done);
        })
    });
});

describe('route /rooms/:room/messages', function () {
    describe('GET', function () {
        it('Should respond with messages for known room', function (done) {
            messageRepo.__set([
                message1, message2, message3, message4, message5
            ]);
            testApp.get('/rooms/room3/messages')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({
                    messages: [
                        message3, message4, message5
                    ]
                }, done);
        });
        it('Should respond with empty messages for unknown room', function (done) {
            messageRepo.__set([]);
            testApp.get('/rooms/non-existent/messages')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({
                    messages: []
                }, done);
        })
    });
});

function message(_id, roomName, userName, text) {
    return {
        _id: _id,
        roomName: roomName,
        userName: userName,
        text: text
    }
}
