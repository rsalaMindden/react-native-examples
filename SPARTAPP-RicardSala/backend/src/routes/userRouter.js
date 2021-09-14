const { Router } = require('express');
const passport = require('passport');
const {
  deleteUserById,
  updateUserById,
} = require('../controller/userController');

const userRouter = new Router();

userRouter
  .route('/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .delete(deleteUserById)
  .put(updateUserById);

module.exports = userRouter;
