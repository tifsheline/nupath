//post model

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  // _by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  _by: String,
  content: String
  },
{timestamps: true});

var postSchema = mongoose.Schema({
  // _by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  _by: String,
  content: String,
  comments: [commentSchema],
  active: {type: Boolean, default: true}
},
{timestamps: true});

var Post = mongoose.model('Post', postSchema)

module.exports = Post
