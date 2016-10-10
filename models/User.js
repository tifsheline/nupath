var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  // Start add properties here
  name: String,
  email: String,
  school: String,
  active: {type: Boolean, default: true}
}, {timestamps: true});

var User = mongoose.model('User', userSchema);

module.exports = User;
