const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const searchRouter = require('./routes/search');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use('/', searchRouter);

module.exports = app;
