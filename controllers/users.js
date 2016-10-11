var User = require('../models/User.js');

module.exports = {
  index: function(req, res){
  	User.find({active: true}, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.sendFile('posts/index.ejs', data);
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
    User.findByIdAndUpdate(req.params.id, {active: false}, {new: true}, function(err, data){
    	if (err) {
      	res.json(err);
      } else {
      	res.json(data);
      }
    });
  },

  login: function(req, res){
    res.render('authenticate/login')
  },

  signup: function(req, res){
    res.render('authenticate/signup', {message: req.flash('signupMessage')})
  }
}
