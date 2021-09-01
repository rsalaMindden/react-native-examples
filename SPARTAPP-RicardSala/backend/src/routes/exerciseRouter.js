const { Router } = require('express');
const passport = require('passport');
const { createOne } = require('../controller/exerciseController');

const exerciseRouter = new Router();

exerciseRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .post(createOne);

module.exports = exerciseRouter;
