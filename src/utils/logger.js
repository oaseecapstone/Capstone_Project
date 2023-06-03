const winston = require('winston');
const expressWinston = require('express-winston');

const packageName = require('../../package.json');
const { nodeEnv } = require('../config/config');

const logFormatter = winston.format.printf((info) => {
  const {
    timestamp, level, stack, message, ...args
  } = info;
  const errorMessage = `${stack} ${message}`;

  const symbols = Object.getOwnPropertySymbols(info);
  if (info[symbols[0]] !== 'error') {
    return `${timestamp} ${level}: ${message}`;
  }

  return `${timestamp} ${level}: ${errorMessage}\n ${JSON.stringify(args, null, 2)}`;
});

const logger = winston.createLogger({
  maxsize: 5242880, // 5MB
  maxFiles: 5,
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  defaultMeta: { service: `${packageName.name.toLocaleLowerCase()}-service` },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormatter),
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(winston.format.prettyPrint(), logFormatter),
    }),
  ],
});

if (nodeEnv === 'production') {
  logger.add(new winston.transports.File({ filename: 'logs/combined.log', level: 'debug' }));
}

const requestLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.json(), winston.format.prettyPrint()),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute(_req, _res) {
    return false;
  },
});

module.exports = {
  logger,
  requestLogger,
};
