const bcrypt = require('bcryptjs');
const TokenManager = require('../../tokenize/TokenManager');

module.exports = (authService) => ({
    loginUser: async (req) => {
        const user = await authService.loginUser(req.body.username, req.body.password);

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            throw new Error('Password not match');
        }

        const accessToken = TokenManager.generateAccessToken(user.toJSON());
        const refreshToken = TokenManager.generateRefreshToken({
            id: user.id,
        });

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'User logged in',
                data: {
                    accessToken,
                    refreshToken
                }
            }
        }
    },

    registerUser: async (req) => {
        const user = await authService.createUser(req.body);
        
        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'User created',
                data: user
            }
        }
    },
});

