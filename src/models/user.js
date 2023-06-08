const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toJSON() {
          return { ...this.get(), password: undefined };
        }
        static associate(models) {
            User.hasMany(models.NewsLike, {
                foreignKey: 'userId',
            });
            User.hasMany(models.NewsComment, {
                foreignKey: 'userId',
            });
            User.hasMany(models.CommentLike, {
                foreignKey: 'userId',
            });
        };
    };

    User.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
        gender: { 
            type: DataTypes.ENUM('L', 'P'),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });
    return User;
}