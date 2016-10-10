var express = require('express');
var router = express.Router();

var messageController = require('../controllers/messages.js');

router.route('/')
  .get(messageController.index);

  router.route('/:id')
    .get(messageController.show)
    .delete(messageController.delete);
module.exports = router;
