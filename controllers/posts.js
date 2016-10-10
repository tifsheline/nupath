//post controllers

var Post = require('../models/Post.js')

//models exports/ POST VERBS
module.exports = {
  index: function(req, res){
      Post.find({}, function(err, posts){
        if(err) return console.log(err);
        res.json(posts);
});
},

  create: function(req, res) {
    //create(new post)
    Post.create(req.body, function(err, post){
      if(err) return console.log(err);
      res.json({message: "Post created!", post: post});
    });
  },


  show: function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if(err) return console.log(err);
      res.json(post);
    });
  },

  update: function(req, res) {
      //edit(existing post)
      Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post) {
        if(err) return console.log(err);
        res.json({message: "Post updated!", updatedPost: post});
      });
    },

    destroy: function(req, res) {
      //delete a post
      Post.findByIdAndRemove(req.params.id, function(err) {
        if(err) return console.log(err);
        res.json({message: "Deleted the post!!"});
      });
    }
};
