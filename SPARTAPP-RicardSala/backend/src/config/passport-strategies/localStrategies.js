const passport = require('passport');
const { Strategy } = require('passport-local');
const { findOne } = require('../../models/userModel');
const User = require('../../models/userModel');

passport.use(
  'singup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, next) => {
      try {
        const user = await User.findOne({ email });
        if (user) {
          next(null, false, { message: 'Email already taken' });
        }

        if (!user) {
          const newUser = await User.create({
            email: email.toLowerCase(),
            password,
            name: req.body.name,
            picture: req.body.picture,
          });
          next(null, newUser);
        }
      } catch (error) {
        next(error);
      }
    },
  ),
);
passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, next) => {
      try {
        const user = await findOne({ email });
        if (!user) {
          next(null, false, { message: 'user not registred' });
        }
        if (!user.isValidPassword(password)) {
          next(null, false, { message: 'Invalid password' });
        }
        next(null, user);
      } catch (error) {
        next(error);
      }
    },
  ),
);
