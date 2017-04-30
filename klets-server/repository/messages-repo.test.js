var assert = require('chai').assert;
var accounts = require('./messages-repo');

describe('MessagesRepo', function () {

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
        roomName: 'room2',
        userName: 'user2',
        text: 'lorem3'
    };

    describe('save', function () {

        it('Should throw on missing message._id', function () {
            assert.throws(function () {
                accounts.save(Object.assign({}, message1, {_id: undefined}));
            }, /Missing message._id/);
        });
        it('Should throw on missing message.roomName', function () {
            assert.throws(function () {
                accounts.save(Object.assign({}, message1, {roomName: undefined}));
            }, /Missing message.roomName/);
        });
        it('Should throw on missing message.userName', function () {
            assert.throws(function () {
                accounts.save(Object.assign({}, message1, {userName: undefined}));
            }, /Missing message.userName/);
        });
        it('Should throw on missing message.text', function () {
            assert.throws(function () {
                accounts.save(Object.assign({}, message1, {text: undefined}));
            }, /Missing message.text/);
        });

        it('Should create', function () {
            accounts.__set([
                message1
            ]);

            accounts.save(Object.assign({}, message2));

            assert.sameDeepMembers(accounts.__get(), [message1, message2]);
        });
        it('Should update', function () {
            accounts.__set([
                message1,
                message2
            ]);

            accounts.save(Object.assign({}, message2, {text: 'foobar'}));

            assert.sameDeepMembers(accounts.__get(), [
                message1,
                {
                    _id: message2._id,
                    roomName: message2.roomName,
                    userName: message2.userName,
                    text: 'foobar'
                }
            ]);
        });
    });

    describe('getById', function () {
        it('Should return message by _id', function () {
            accounts.__set([
                message1,
                message2,
                message3
            ]);
            assert.deepEqual(accounts.getById('message1'), message1);
            assert.deepEqual(accounts.getById('message2'), message2);
            assert.deepEqual(accounts.getById('message3'), message3);
        });
    });

    describe('findByRoomName', function () {

        it('Should return messages by room', function () {
            accounts.__set([
                message1,
                message2,
                message3
            ]);

            assert.sameDeepMembers(accounts.findByRoomName('room1'), [message1]);
            assert.sameDeepMembers(accounts.findByRoomName('room2'), [message2, message3]);
        })
    });

    describe('getRoomNames', function () {

        it('Should return distinct room names', function () {
            accounts.__set([
                message1,
                message2,
                message3
            ]);

            var actual = accounts.getRoomNames();
            assert.lengthOf(actual, 2);
            assert.sameDeepMembers(actual, ['room1', 'room2']);
        })

    });
});
