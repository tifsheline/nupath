var User = require('../models/User.js');

module.exports = {
  index: function(req, res){
  	User.find({}, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.json(data);
      }
    });
  },

  show: function(req, res){
  	User.findById(req.params.id, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.json(data);
      }
    });
  },

  new: function(req, res){
  	res.sendFile('users/new.js');
  },

  create: function(req, res){
  	User.create(req.body, function(err, user){
    	if (err) {
      	res.json(err);
      } else {
      	res.json(user);
      }
    });
  },

  edit: function(req, res){
  	res.sendFile('users/update.js');
  },

  update: function(req, res){
  	User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.json(data);
      }
    });
  },

  delete: function(req, res){
  	User.findByIdAndRemove(req.params.id, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.json({message: 'Successfully deleted'});
      }
    });
  }
}
