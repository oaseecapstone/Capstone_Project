const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CommentLike extends Model {
        static associate(models) {
            CommentLike.belongsTo(models.User, {
                foreignKey: 'userId',
            });
            CommentLike.belongsTo(models.News, {
                foreignKey: 'newsId',
            });
            CommentLike.belongsTo(models.NewsComment, {
                foreignKey: 'commentId',
            });
        } 
    };

    CommentLike.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        newsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'News',
                key: 'id',
            }   
        },
        commentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'NewsComment',
                key: 'id',
            }   
        },
    }, {
        sequelize,
        tableName: 'commentlike',
        modelName: 'CommentLike',
    });
    return CommentLike;
}