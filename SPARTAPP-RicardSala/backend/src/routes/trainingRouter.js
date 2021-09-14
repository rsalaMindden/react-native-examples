const { Router } = require('express');
const { createOne, getAll } = require('../controller/trainingController');

const trainingRouter = new Router();

trainingRouter
  .route('/')
  .post(createOne)
  .get(getAll);

module.exports = trainingRouter;
