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

server.use('/api/user', userRouter);

server.listen(
  port,
  () => debug(`server is running in http://localhost${port}`),
);
