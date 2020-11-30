const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('./library/logger');
const cors = require('cors');
//database

const app = express();
require('dotenv').config();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev', { stream: logger.winston.devStream }));
} else {
  app.use(morgan('short', { stream: logger.winston.prodStream }));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./middlewares/common'));
require('./controllers')(app);

// catch 404 and forward to error handler
app.all('*', function(req, res, next) {
  next(createError(404));
});

// error handler
/* eslint-disable no-unused-vars */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('error', { message: 'API not found', error: err });
});
module.exports = app;
