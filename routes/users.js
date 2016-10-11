var
	userRouter = require('express').Router(),
	usersController = require("../controllers/users.js"),
	achievementsController = require('../controllers/achievements.js');

userRouter.route('/')
	 .get(usersController.index)
	 .post(usersController.create);

userRouter.route('/:id')
	  .get(usersController.show)
	  .patch(usersController.update)
	  .delete(usersController.delete);

userRouter.get('/new', usersController.new);

userRouter.get('/:id/edit', usersController.edit);

userRouter.get('/:id/achievements', achievementsController.index);
userRouter.post('/:id/achievements', achievementsController.create);
userRouter.get('/:id/achievements/new', achievementsController.new);
userRouter.patch('/:id/achievements/:id', achievementsController.update);
userRouter.delete('/:id/achievements/:id', achievementsController.delete);

module.exports = userRouter;
