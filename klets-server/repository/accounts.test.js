var assert = require('chai').assert;
var accounts = require('./accounts');

describe('repository Accounts', function () {

    describe('save', function () {
        it('Should throw on missing _id', function () {
            try {
                accounts.save({});
                assert.fail('Expected error');
            } catch (err) {
                assert.isNotNull(err);
            }
        });
        it('Should create', function () {
            accounts.__set([]);

            accounts.save({_id: 1, data: 'foo'});

            var items = accounts.__get();
            assert.lengthOf(items, 1);
            assert.deepEqual(items[0], {_id: 1, data: 'foo'})
        });
        it('Should update', function () {
            accounts.__set([
                {_id: 1, data: 'foo'}
            ]);

            accounts.save({_id: 1, data: 'bar'});

            var items = accounts.__get();
            assert.lengthOf(items, 1);
            assert.deepEqual(items[0], {_id: 1, data: 'bar'})
        });
    });

    describe('findByUserName', function () {

        it('Should return account by userName', function () {
            accounts.__set([
                {_id: 1, userName: 'user1'},
                {_id: 2, userName: 'user2'}
            ]);

            assert.deepEqual(accounts.findByUserName('user1'), {_id: 1, userName: 'user1'});
            assert.deepEqual(accounts.findByUserName('user2'), {_id: 2, userName: 'user2'});
        })
    })
});
