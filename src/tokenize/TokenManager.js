const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    generateAccessToken: (payload) => {
        const token = jwt.sign(payload, config.jwt.accessTokenSecret, { 
            expiresIn: config.jwt.accessTokenLife 
        });
        return token;
    },

    generateRefreshToken: (payload) => {
        const token = jwt.sign(payload, config.jwt.refreshTokenSecret, { 
            expiresIn: config.jwt.refreshTokenLife 
        });
        return token;
    },

    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, config.jwt.accessTokenSecret);
            return decoded;
        } catch (error) {
            return null;
        }
    }
}
