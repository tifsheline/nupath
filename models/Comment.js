//comment model

var mongoose = require('mongoose');

var userCommentSchema = mongoose.Schema({
  // _by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  comment: String
},
{timestamps: true});

var UsrComment = mongoose.model('UsrComment', userCommentSchema)

module.exports = UsrComment
