var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var messagesController = require('../controllers/messages-controller');

// Create a message
router.post('/',
    bodyParser.json(),
    messagesController.create);

module.exports = router;
