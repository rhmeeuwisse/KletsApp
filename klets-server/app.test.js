var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('./app');

var testApp = supertest(app);

describe('route non-existent', function () {
    it('Should respond Not found', function (done) {
        testApp.get('/non-existent')
            .expect(404)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Not found', done);
    });
});
