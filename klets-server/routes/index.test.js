var assert = require('chai').assert;
var supertest = require('supertest');
var app = require('../app');

var testApp = supertest(app);

describe('route /', function () {
    describe('GET', function () {
        it('Should respond with Welcome text', function (done) {
            testApp.get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect('Welcome to the Klets Service', done);
        });
    });
});
