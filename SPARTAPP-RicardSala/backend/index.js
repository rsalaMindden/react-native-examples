require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

require('./src/config/dataBaseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');
const exerciseRouter = require('./src/routes/exerciseRouter');
const trainingRouter = require('./src/routes/trainingRouter');

server.use('/api/user', userRouter);
server.use('/api/exercise', exerciseRouter);
server.use('/api/training', trainingRouter);

server.listen(
  port,
  () => debug(`server is running in http://localhost${port}`),
);
