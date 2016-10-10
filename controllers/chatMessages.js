var ChatMessage = require('../models/ChatMessage.js');

var controller = {
  index: function(req, res){
    ChatMessage.find({active: true}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },

  show: function(req, res){
    ChatMessage.findById(req.params.id, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },

  delete: function(req, res){
    ChatMessage.findByIdAndUpdate(req.params.id, {active: false}, {new: true}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  }
};

module.exports = controller;
