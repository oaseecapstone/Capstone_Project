const bcrypt = require('bcryptjs');
const Models = require('../../models');

const AuthService = {
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

    createUser: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await Models.User.create({
            username: user.username,
            password: hashedPassword,
            email: user.email,
            fullname: user.fullname,
            phone: user.phone,
            image: user.image,
            role: user.role,
        });

        console.log(newUser);
        return newUser;
    },

    getMe: async (id) => {
        const foundUser = await Models.User.findOne({
            where: {
                id,
                attributes: ['id', 'username', 'email', 'fullname', 'phone', 'image', 'role'],
            },
        });

        if (!foundUser) {
            throw new Error('User not found');
        }

        return foundUser;
    }
};

module.exports = AuthService;