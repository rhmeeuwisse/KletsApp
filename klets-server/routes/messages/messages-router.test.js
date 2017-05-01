var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../../app');
var messageRepo = require('../../repository/message-repo');

var testApp = supertest(app);

const message1 = message('message1', 'room1', 'user1', 'lorem1');
const message2 = message('message2', 'room2', 'user2', 'lorem2');
const message3 = message('message3', 'room3', 'user3', 'lorem3');
const message4 = message('message4', 'room3', 'user1', 'lorem4');
const message5 = message('message5', 'room3', 'user2', 'lorem5');

describe('route /messages', function () {

    describe('POST', function () {
        it('Should create message', function (done) {
            messageRepo.__set([
                message1
            ]);

            testApp.post('/messages')
                .send({
                    message: message2
                })
                .expect(201)
                .expect('Content-Type', 'text/plain; charset=utf-8')
                .expect(/Created/)
                .expect(function () {
                    assert.deepEqual(messageRepo.__get(), [message1, message2]);
                })
                .end(done);
        });
        it('Should update message', function (done) {
            messageRepo.__set([
                message1,
                message2
            ]);
            testApp.post('/messages')
                .send({
                    message: Object.assign({}, message2, { text: 'updated'})
                })
                .expect(201)
                .expect('Content-Type', 'text/plain; charset=utf-8')
                .expect(/Created/)
                .expect(function () {
                    assert.deepEqual(messageRepo.__get(), [
                        message1,
                        {
                            _id: message2._id,
                            userName: message2.userName,
                            roomName: message2.roomName,
                            text: 'updated'
                        }]);
                })
                .end(done);
        });
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
