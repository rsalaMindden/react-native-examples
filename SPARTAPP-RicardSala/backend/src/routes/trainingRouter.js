const { Router } = require('express');
const { createOne } = require('../controller/trainingController');

const trainingRouter = new Router();

trainingRouter
  .route('/')
  .post(createOne);

module.exports = trainingRouter;
