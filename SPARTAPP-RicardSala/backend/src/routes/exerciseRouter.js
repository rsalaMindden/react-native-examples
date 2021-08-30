const { Router } = require('express');
const { createOne } = require('../controller/exerciseController');

const exerciseRouter = new Router();

exerciseRouter
  .route('/')
  .post(createOne);

module.exports = exerciseRouter;
