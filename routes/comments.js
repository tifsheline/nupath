var commentRouter = require('express').Router();
var commentController = require("../controllers/comments.js");

commentRouter.route('/')
	 .get(commentController.index)
	 .post(commentController.create);

commentRouter.route('/:id')
	  .get(commentController.show)
	  .patch(commentController.update)
	  .delete(commentController.destroy);


// commentRouter.get('/new', commentController.new);

// commentRouter.get('/:id/edit', commentController.edit);

module.exports = commentRouter;
