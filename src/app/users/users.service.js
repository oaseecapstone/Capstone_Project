const bcrypt = require('bcryptjs');
const Models = require('../../models');

const UserService = {
    createUser: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await Models.User.create({
            username: user.username,
            password: hashedPassword,
            email: user.email,
            fullname: user.fullname,
            phone: user.phone,
        });

        console.log(newUser);
        return newUser;
    },

    loginUser: async (username, password) => {
        const foundUser = await Models.User.findOne({
            where: {
                username,
            },
        });

        if (!foundUser) {
            throw new Error('User not found');
        }

        const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordMatch) {
            throw new Error('Password not match');
        }

        return foundUser;
    },

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