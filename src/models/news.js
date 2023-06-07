const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        static associate(models) {
            
        }
    };

    News.init({
        newslikeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Newslike',
                key: 'id',
            }
        },
        newscommentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Newscomment',
                key: 'id',
            }
        },
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
        summerize: {
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