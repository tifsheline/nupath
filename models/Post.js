var mongoose = require('mongoose');

  //establish allowed properties of a post
postSchema = mongoose.Schema({
  title: String
  // user: null
},
{timestamps: true});

// pre method if needed

//make a model out of that Schema
var Post = mongoose.model('Post', postSchema);

//make the Post model available anywhere that require it.
module.exports = Post;
