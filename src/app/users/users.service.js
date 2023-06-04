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
    },

    updateUser: async (id, data) => {
        const users = await Models.User.update({
            image: data.image,
            fullname: data.fullname,
            phone: data.phone,
        }, {
            where: {
                id,
            },
        });

        if (!users) {
            throw new Error('User not found');
        }

        return users;
    }


};

module.exports = UserService;