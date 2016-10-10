//post model

var mongoose = require('mongoose');

var userPostSchema = mongoose.Schema({
  // _by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  post: String
},
{timestamps: true});

var UsrPost = mongoose.model('UsrPost', userPostSchema)

module.exports = UsrPost
