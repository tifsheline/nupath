var express = require('express');
var router = express.Router();

var messageThreadsController = require('../controllers/messageThreads.js');

router.route('/')
  .get(messageThreadsController.index);

module.exports = router;
