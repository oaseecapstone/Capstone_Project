const bcrypt = require('bcryptjs');
const Models = require('../../models');

const AuthService = {
    loginUser: async (email, password) => {
        const foundUser = await Models.User.findOne({
            where: {
                email,
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

    createUser: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await Models.User.create({
            name: user.username,
            password: hashedPassword,
            email: user.email,
            gender: user.gender,
        });

        console.log(newUser);
        return newUser;
    },

    getMe: async (id) => {
        const foundUser = await Models.User.findOne({
            where: {
                id,
                attributes: ['id', 'name', 'email', 'gender'],
            },
        });

        if (!foundUser) {
            throw new Error('User not found');
        }

        return foundUser;
    }
};

module.exports = AuthService;