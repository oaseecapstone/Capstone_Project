module.exports = (isAdmin) => async (req, res, next) => {
  const { user } = req;
  if (!user) {
    throw new _apiErrors.UnauthorizedError('Unauthorized');
  }

  if (user.role !== 'admin') {
    throw new _apiErrors.UnauthorizedError('Only for admin!');
  }

  return next();
}
