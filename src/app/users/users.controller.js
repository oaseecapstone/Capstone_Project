const { uploadImage } = require('../../middlewares/uploadHandler');

module.exports = (userService) => ({
    getAllUsers: async () => {
        const users = await userService.getAllUsers();

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'Users retrieved',
                data: users
            }
        }
    },

    getUserById: async (req) => {
        const user = await userService.getUserById(req.params.id);

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'User retrieved',
                data: user
            }
        }
    },

    updateUser: async (req) => {
        console.log(req);
        const { id } = req.params;
        const user = await userService.updateUser(
            id,
            req.body.fullname,
            req.body.phone,
            req.body.email,
        );

        if (!user) {
            throw new Error('User not found');
        }

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'User updated',
                data: user
            }
        }
    },

});

