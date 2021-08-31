require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

require('./src/config/dataBaseConfig');
require('./src/config/passport-strategies/jwtStrategy');
require('./src/config/passport-strategies/localStrategies');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

require('./src/config/passportConfig')(server);

const userRouter = require('./src/routes/userRouter');
const exerciseRouter = require('./src/routes/exerciseRouter');
const trainingRouter = require('./src/routes/trainingRouter');
const authRouter = require('./src/routes/authRouter');

server.use('/api/user', userRouter);
server.use('/api/exercise', exerciseRouter);
server.use('/api/training', trainingRouter);
server.use('/', authRouter);

server.listen(
  port,
  () => debug(`server is running in http://localhost${port}`),
);
