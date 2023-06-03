const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toJSON() {
          return { ...this.get(), password: undefined };
        }
    };

    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Username must not be empty' },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Password must not be empty' },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Email must not be empty' },
                is: {
                    args: /\S+@\S+\.\S+/,
                    msg: 'Email address must be valid',
                }
            },
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: {
                    args: /^08\d{8,}$/,
                    msg: 'Phone number should 08xxxxxxxxxx',
                }
            },
        }, 
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });
    return User;
}