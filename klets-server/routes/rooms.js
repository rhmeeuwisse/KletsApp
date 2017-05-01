var express = require('express');
var router = express.Router();

var roomsController = require('../controllers/rooms-controller');

/* List all rooms */
router.get('/', roomsController.list);

module.exports = router;
