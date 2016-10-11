var MessageThread = require('../models/MessageThread.js');

var messageThreadController = {
  index: function(req, res){
    MessageThread.find({}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },
  show: function(req, res){

  },
  create: function(req, res){

  },
  delete: function(req, res){

  },
}

module.exports = messageThreadController;
