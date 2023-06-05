module.exports = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({
            status: 'error',
            message: 'Forbidden'
        });
    }
    next();
}