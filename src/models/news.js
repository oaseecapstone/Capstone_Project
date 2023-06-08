const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        static associate(models) {
            News.hasMany(models.NewsLike, {
                foreignKey: 'newsId',
            });
            News.hasMany(models.NewsComment, {
                foreignKey: 'newsId',
            });
            News.hasMany(models.CommentLike, {
                foreignKey: 'newsId',
            });
        }
    };

    News.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Title must not be empty' },
            },
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        sentiment: {
            type: DataTypes.ENUM('positive', 'negative', 'neutral'),
            allowNull: false,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summarize: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        keyword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'news',
        modelName: 'News',
    });
    return News;
}