const Models = require('../../models');

const UserService = {
    getAllUsers: async () => {
        const users = await Models.User.findAll({
            attributes: ['id', 'username', 'email', 'fullname', 'phone'],
        });

        return users;
    },

    getUserById: async (id) => {
        const users = await Models.User.findOne({
            where: {
                id,
            },
            attributes: ['id', 'username', 'email', 'fullname', 'phone'],
        });

        if (!users) {
            throw new Error('User not found');
        }

        return users;
    }


};

module.exports = UserService;