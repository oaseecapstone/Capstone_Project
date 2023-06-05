const makeExpressCallback = require('./express-callback');
const makeValidatorCallback = require('./validator-callback');
const errorHandler = require('./error-handler');
const auth = require('./auth');
const notFoundHandler = require('./notfound-handler');
const isAdmin = require('./is-admin');
const isUser = require('./is-user');

module.exports = {
  makeExpressCallback,
  makeValidatorCallback,
  errorHandler,
  auth,
  notFoundHandler,
  isAdmin,
  isUser,
};