//Comment controllers
var Comment = require('../models/Comment.js')

//models exports/ Comment VERBS
module.exports = {
  index: function(req, res){
      Comment.find({}, function(err, comments){
        if(err) return console.log(err);
        res.json(comments);
});
},

  create: function(req, res) {
    //create(new comment)
    Comment.create(req.body, function(err, comment){
      if(err) return console.log(err);
      res.json({message: "Comment created!", comment: comment});
    });
  },


  show: function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
      if(err) return console.log(err);
      res.json(comment);
    });
  },

  update: function(req, res) {
      //edit(existing comment)
      Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, comment) {
        if(err) return console.log(err);
        res.json({message: "Comment updated!", updatedComment: comment});
      });
    },

    destroy: function(req, res) {
      //delete a comment
      Comment.findByIdAndRemove(req.params.id, function(err) {
        if(err) return console.log(err);
        res.json({message: "Deleted the comment!!"});
      });
    }
};
