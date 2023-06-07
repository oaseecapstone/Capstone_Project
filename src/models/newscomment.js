const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class NewsComment extends Model {
        static associate(models) {
            NewsComment.belongsTo(models.News, {
                foreignKey: 'newsId',
            });
            NewsComment.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    };

    NewsComment.init({
        newsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'News',
                key: 'id',
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'newscomment',
        modelName: 'NewsComment',
    });
    return NewsComment;
}