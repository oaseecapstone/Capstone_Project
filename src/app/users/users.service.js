const Models = require('../../models');

const UserService = {
    getAllUsers: async () => {
        const users = await Models.User.findAll({
          attributes: ['id', 'username', 'email', 'fullname', 'phone', 'role'],
        });
      
        const usersData = users.map((user) => ({
          id: user.id,
          username: user.username,
          email: user.email,
          fullname: user.fullname,
          phone: user.phone,
          role: user.role,
        }));
      
        const isAdmin = usersData.some(user => user.role === 'admin');
      
        if (!isAdmin) {
          throw new Error('Only admin can access this page');
        }
      
        return usersData;
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

    updateUser: async (id, user) => {
        const {
            fullname, phone, image, email,
        } = user;

        const foundUser = await Models.User.findOne({
            where: {
                id,
            },
        });

        const transaction = await Models.sequelize.transaction();

        if (!foundUser) {
            throw new Error('User not found');
        }

        const updatedUser = await foundUser.update({
            fullname,
            phone,
            image,
            email,
        }, {
            where: {
                id,
                transaction,
            },
        });

        return updatedUser;
    },

};

module.exports = UserService;