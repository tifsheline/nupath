//post controllers

var Post = require('../models/Post.js')

//models exports/ POST VERBS
module.exports = {
  index: function(req, res){
      Post.find({active: true}, function(err, data){
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
});
},

  create: function(req, res) {
    //create(new post)
    Post.create(req.body, function(err, data){
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },


  show: function(req, res) {
    Post.findById(req.params.id, function(err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },

  update: function(req, res) {
      //edit(existing post)
      Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data) {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      });
    },

    destroy: function(req, res) {
      //delete a post
      Post.findByIdAndUpdate(req.params.id, {active: false}, {new: true}, function(err, data) {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      });
    }
};
