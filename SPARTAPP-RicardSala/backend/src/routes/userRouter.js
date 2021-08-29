const { Router } = require('express');
const { createOne } = require('../controller/userController');

const userRouter = new Router();

userRouter
  .route('/')
  .post(createOne);

module.exports = userRouter;
