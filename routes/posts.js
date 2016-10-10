var postRouter = require('express').Router();
var postController = require("../controllers/posts.js");

postRouter.route('/')
	 .get(postController.index)
	 .post(postController.create);

postRouter.route('/:id')
	  .get(postController.show)
	  .patch(postController.update)
	  .delete(postController.destroy);


// postRouter.get('/new', postController.new);

// postRouter.get('/:id/edit', postController.edit);

module.exports = postRouter;
