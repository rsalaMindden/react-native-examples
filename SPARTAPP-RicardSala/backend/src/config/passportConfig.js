const passport = require('passport');

require('./passport-strategies/localStrategies');
require('./passport-strategies/jwtStrategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
