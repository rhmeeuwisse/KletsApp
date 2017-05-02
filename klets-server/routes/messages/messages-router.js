var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var messagesController = require('./messages-controller');

// Create a message
router.post('/',
    bodyParser.json({type: '*/*'}), // workaround: accepting any as klets-client doesn't set Content-Type header correctly
    messagesController.create);

module.exports = router;
