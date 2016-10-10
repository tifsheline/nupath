var postsRouter = require('express').Router();
var postsController = require("../controllers/posts.js");
var commentsController = require("../controllers/comments.js");

postsRouter.route('/')
	 .get(postsController.index)
	 .post(postsController.create);

postsRouter.route('/:id')
	  .get(postsController.show)
	  .patch(postsController.update)
	  .delete(postsController.destroy);

postsRouter.route('/:id/comments')
	 .get(commentsController.index)
	 .post(commentsController.create);

postsRouter.route('/:postId/comments/:commentId')
	  .get(commentsController.show)
	  .patch(commentsController.update)
	  .delete(commentsController.destroy);

// postsRouter.get('/new', postsController.new);

// postsRouter.get('/:id/edit', postsController.edit);

module.exports = postsRouter;
