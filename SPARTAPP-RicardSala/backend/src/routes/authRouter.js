/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = new Router();
let refreshTokens = [];

router
  .post('/api/register', passport.authenticate('signup', { session: false }),

    ({ user }, res) => {
      res.json({
        user,
        message: 'signup successfull',

      });
    });

router
  .post('/api/login', passport.authenticate('login', { session: false }),
    ({ user }, res) => {
      const data = { _id: user._id, email: user.email };
      try {
        const token = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
          { expiresIn: '5min' },

        );
        const refreshToken = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
        );
        refreshTokens.push(refreshToken);
        return res.json({
          token,
          refreshToken,
        });
      } catch (error) {
        res.status(500);
        return res.send(error);
      }
    });

router
  .get('/api/protected', passport.authenticate('jwt', { session: false }),
    ({ user }, res) => {
      res.json({
        user,
        message: 'protected route works',
      });
    });

router
  .post('/api/refreshToken', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.sendStatus(403);
    }
    return jwt.verify(refreshToken, process.env.JWT_SECRET,
      (err, { user }) => {
        if (err) {
          return res.sendStatus(403);
        }
        const data = { _id: user._id, email: user.email };

        const token = jwt.sign(
          { user: data },
          process.env.JWT_SECRET,
          { expiresIn: '5m' },
        );

        return res.json({ token });
      });
  });
router.post('/logout', (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successful');
});

module.exports = router;
