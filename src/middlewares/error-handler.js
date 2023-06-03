const { Sequelize } = require('sequelize');
const { JsonWebTokenError } = require('jsonwebtoken');
const { APIError } = require('../utils/api-errors');
const { logger } = require('../utils/logger');

// eslint-disable-next-line no-unused-vars
module.exports = async (error, req, res, _next) => {
  logger.error(error);

  // catch api error
  if (error instanceof APIError) {
    return res.status(error.status).send({
      status: 'fail',
      message: error.message,
    });
  }

  if (error instanceof Sequelize.ValidationError) {
    return res.status(400).send({
      status: 'fail',
      message: error.errors[0].message,
    });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).send({
      status: 'fail',
      message: 'Unauthorized',
    });
  }

  // connect all errors
  return res.status(500).send({
    status: 'error',
    message: 'Something went wrong!',
    stack: error.stack,
  });
};
