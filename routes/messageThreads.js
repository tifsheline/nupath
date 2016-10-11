var express = require('express');
var router = express.Router();

var messageThreadsController = require('../controllers/messageThreads.js');

router.route('/')
  .get(messageThreadsController.index);

router.route('/:id')
  .get(messageThreadsController.show);

router.route('/new/:user1/:user2')
  .post(messageThreadsController.create);

module.exports = router;
