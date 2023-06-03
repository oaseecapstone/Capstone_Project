const { NotFoundError } = require('../utils/api-errors');

// eslint-disable-next-line no-unused-vars
module.exports = async (req, res, next) => {
  const error = new NotFoundError(`Not Found: ${req.method} ${req.originalUrl}`);

  next(error);
};
