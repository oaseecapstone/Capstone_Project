const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class NewsLike extends Model {
        static associate(models) {
            NewsLike.belongsTo(models.News, {
                foreignKey: 'newsId',
            });
            NewsLike.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    };

    NewsLike.init({
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
    }, {
        sequelize,
        tableName: 'newslike',
        modelName: 'NewsLike',
    });
    
    return NewsLike;
}