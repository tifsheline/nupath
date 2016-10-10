var express = require('express');
var router = express.Router();

var chatMessageController = require('../controllers/chatMessages.js');

router.route('/')
  .get(chatMessageController.index);

  router.route('/:id')
    .get(chatMessageController.show)
    .delete(chatMessageController.delete);
module.exports = router;
