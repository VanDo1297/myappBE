/* eslint-disable no-unused-vars */
const winston = require('winston');
const SERVER_LOGS_FILE = 'logs/server.log';
const ERROR_LOGS_FILE = 'logs/error.log';

const format = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

winston.configure({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      level: 'info',
      handleExceptions: true,
      format: winston.format.combine(winston.format.timestamp(), format),
      filename: SERVER_LOGS_FILE
    }),
    new winston.transports.File({
      level: 'warn',
      handleExceptions: true,
      format: winston.format.combine(winston.format.timestamp(), format),
      filename: SERVER_LOGS_FILE
    }),
    new winston.transports.File({
      level: 'error',
      handleExceptions: true,
      format: winston.format.combine(winston.format.timestamp(), format),
      filename: ERROR_LOGS_FILE
    })
  ]
});

winston.devStream = {
  write: function(message, encoding) {
    winston.debug(message);
  }
};

winston.prodStream = {
  write: function(message, encoding) {
    winston.info(message);
  }
};

function success(success, req) {
  winston.info(
    `${success.status || 200} - ${req.method || ''} ${req.originalUrl ||
      ''} - ${success.message || ''} - ${req.ip || ''}`
  );
}

function warn(error, req) {
  winston.warn(
    `${error.status || 500} - ${req.method || ''} ${req.originalUrl ||
      ''} - ${error.message || ''} - ${req.ip || ''}`
  );
}

function error(error, req) {
  winston.error(
    `${error.status || 500} - ${req.method || ''} ${req.originalUrl ||
      ''} - ${error.message || ''} - ${req.ip || ''}`
  );
}

module.exports = {
  winston,
  success,
  warn,
  error
};
