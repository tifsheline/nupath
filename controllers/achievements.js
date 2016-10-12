var User = require('../models/User.js');

module.exports = {
  index: function(req, res){
    User.findById(req.params.id, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },

  create: function(req, res) {
    User.findById(req.params.id, function(err, data){
      if (err) {
        res.json(err);
      } else {
        data.achievements.push(req.body);
        console.log(data.achievements)
        data.save(function(err){
          if (err) {
            res.json(err);
          } else {
            res.json(data)
          }
        });
      }
    })
  },

  new: function(req, res){

  },

  show: function(req, res) {

  },

  edit: function(req, res){

  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  }
};
