var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var authController = require('../controllers/authController');

/* GET authenticated user. */
router.get('/me',
    authController.authenticate,
    function (req, res, next) {
        res.json({userName: req.authenticatedUserName});
    }
);

module.exports = router;
