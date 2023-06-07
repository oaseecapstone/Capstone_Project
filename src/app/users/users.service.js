const Models = require('../../models');

const UserService = {
    getAllUsers: async () => {
        const users = await Models.User.findAll({
          attributes: ['id', 'username', 'email', 'fullname', 'phone', 'role'],
        });
      
        return users;
    },

    getUserById: async (id) => {
        const users = await Models.User.findOne({
            where: {
                id,
            },
            attributes: ['id', 'username', 'email', 'fullname', 'phone', 'image', 'role'],
        });

        if (!users) {
            throw new Error('User not found');
        }

        return users;
    },

    updateUser: async (id, fullname, phone, email, image) => {

        const foundUser = await Models.User.findOne({
            where: {
                id,
            },
        });

        if (!foundUser) {
            throw new Error('User not found');
        }

        const updatedUser = await Models.User.update({
            fullname,
            phone,
            email,
        }, {
            where: {
                id,
            },
        });

        return updatedUser;
    },

};

module.exports = UserService;