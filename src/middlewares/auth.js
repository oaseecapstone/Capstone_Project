const { verifyToken } = require('../tokenize/TokenManager');
const { UnauthorizedError } = require('../utils/api-errors');

const decodeToken = async (header) => {
  if (!header) {
    throw new UnauthorizedError('Authorization header missing');
  }
  const token = header.replace('Bearer ', '');
  const payload = verifyToken(token);
  return payload;
};

module.exports = async (req, res, next) => {
  const { method } = req;
  if (method === 'OPTIONS') {
    return next();
  }
  try {
    req.payload = await decodeToken(req.headers.authorization);
    return next();
  } catch (err) {
    return next(err);
  }
};
