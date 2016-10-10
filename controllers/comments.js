//Comment controllers
var Post = require('../models/Post.js');

//models exports/ Comment VERBS

module.exports = {
  index: function(req, res){
      Post.findById(req.params.id, {active: true}, function(err, data){
        if (err) return res.json(err);
          res.json(data);
        });
},
  create: function(req, res){
    Post.findById(req.params.id, function(err, data){
          if(err) return res.json(err);
          data.comments.push(req.body);
          data.save(function(err){
            if(err) return res.json(err);
            res.json(data)
          });
        })
  },

  show: function(req, res) {
    Post.findById(req.params.postId, function(err, data){
      if(err) return res.json(err);
      res.json(data.comments.id(req.params.commentId))
    })
  },

  update: function(req, res) {
      //edit(existing comment)
      Post.findById(req.params.postId, function(err, data){
            if(err) return res.json(err);
            var comment = data.comments.id(req.params.commentId);
            comment.content = req.body.content;
            data.save(function(err){
              if(err) return res.json(err);
              res.json(data)
            });
          })
    },

    destroy: function(req, res) {
      //delete a comment
      Post.findById(req.params.postId, function(err, data){
        if(err) return res.json(err);
        data.comments.id(req.params.commentId).remove()
        data.save(function(){
          if(err) return res.json(err);
          res.json(data)
        })
      })
    }
};
