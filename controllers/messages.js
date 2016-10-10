var Message = require('../models/Message.js');

var controller = {
  index: function(req, res){
    Message.find({active: true}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },

  show: function(req, res){
    Message.findById(req.params.id, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },

  delete: function(req, res){
    Message.findByIdAndUpdate(req.params.id, {active: false}, {new: true}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  }
};

module.exports = controller;
