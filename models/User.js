var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs')

var userSchema = mongoose.Schema({
  // Start add properties here
  local: {
    name: String,
    email: String,
    password: String,
    school: String
  },
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  active: {type: Boolean, default: true}
}, {timestamps: true});

//method that generates a hash for each user:
userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password)
}
var User = mongoose.model('User', userSchema);

module.exports = User;
