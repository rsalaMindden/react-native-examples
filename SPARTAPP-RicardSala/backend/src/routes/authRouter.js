/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const {
  registerUser, loginUser, refreshTokenUser, logoutUser,
} = require('../controller/authController');

const authRouter = new Router();

authRouter
  .route('/register')
  .all(passport.authenticate('signup', { session: false }))
  .post(registerUser);

authRouter
  .route('/login')
  .all(passport.authenticate('login', { session: false }))
  .post(loginUser);

authRouter
  .route('/refreshToken')
  .post(refreshTokenUser);

authRouter
  .route('/logout')
  .post(logoutUser);

module.exports = authRouter;
