const { Router } = require('express');
const {
  deleteUSerById,
  updateUserById,
} = require('../controller/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .delete(deleteUSerById)
  .put(updateUserById);

module.exports = userRouter;
