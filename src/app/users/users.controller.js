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
    }
});

