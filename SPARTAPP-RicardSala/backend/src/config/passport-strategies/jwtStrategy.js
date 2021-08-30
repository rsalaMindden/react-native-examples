const passport = require('passport-local');
const JWTStrategy = require('passport-jwt');

passport.use(
  new JWTStrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, next) => {
      try {
        next(null, token.user);
      } catch (error) {
        next(error);
      }
    },
  ),
);
