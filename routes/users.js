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

userRouter.get('/:id/threads', usersController.threads);

userRouter.route('/:id/achievements')
					.get(achievementsController.index)
					.post(achievementsController.create);

userRouter.route('/:id/achievements/:achId')
					.get(achievementsController.show)
					.patch(achievementsController.update)
					.delete(achievementsController.delete);

// userRouter.get('/:id/achievements', achievementsController.index);
// userRouter.post('/:id/achievements', achievementsController.create);
// userRouter.get('/:id/achievements/:achId', achievementsController.show);
// userRouter.patch('/:id/achievements/:id', achievementsController.update);
// userRouter.delete('/:id/achievements/:achId', achievementsController.delete);

module.exports = userRouter;
