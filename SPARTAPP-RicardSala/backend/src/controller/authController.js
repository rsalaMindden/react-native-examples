/* eslint-disable no-underscore-dangle */

const jwt = require('jsonwebtoken');

let refreshTokens = [];

const registerUser = ({ user }, res) => {
  try {
    res.json({ user });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
const loginUser = ({ user }, res) => {
  const data = { _id: user._id, email: user.email };
  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '5m' },

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
};
const refreshTokenUser = (req, res) => {
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
};
const logoutUser = (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successful');
};
module.exports = {
  registerUser, loginUser, refreshTokenUser, logoutUser,
};
