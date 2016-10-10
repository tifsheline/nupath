var userRouter = require('express').Router();
var usersController = require("../controllers/users.js");

userRouter.route('/')
	 .get(usersController.index)
	 .post(usersController.create);

userRouter.route('/:id')
	  .get(usersController.show)
	  .patch(usersController.update)
	  .delete(usersController.delete);

userRouter.get('/new', usersController.new);

userRouter.get('/:id/edit', usersController.edit);

module.exports = userRouter;
