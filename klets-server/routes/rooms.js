var express = require('express');
var router = express.Router();

var roomsController = require('../controllers/rooms-controller');

// List all rooms
router.get('/', roomsController.list);

// List a room's messages
router.get('/:roomName/messages', roomsController.listRoomMessages);

module.exports = router;
