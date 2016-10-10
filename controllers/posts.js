//post controllers

var Post = require('../models/Post.js')

//models exports/ POST VERBS
module.exports = {
  index: function(req, res){
      // Post.find({}, function(err, ){
        res.json({message: "USERPOST"});
  // }
},

  create: function(req, res) {
    //create(new post)
    Post.create(req.body, function(err, post){
      if(err) {res.json({message: "A problem occured..."});}
      res.json({message: "Post created!", post: post});
    });
  },


  show: function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      res.json(post);
    });
  }


}
