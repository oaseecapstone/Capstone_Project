const Models = require('../../models');

const NewsLikeService = {
    createLikes: async (newsId, userId, commentId) => {
        const news = await Models.News.findOne({
            where: {
                id: newsId
            }
        });
        if (!news) {
            throw new Error('News not found');
        }
        const newsLike = await Models.NewsLike.create({
            newsId,
            userId,
            commentId
        });
        return newsLike;
    },

    getLikesByCommentId: async (commentId) => {
        const newsComment = await Models.NewsComment.findOne({
            where: {
                id: commentId
            }
        });
        if (!newsComment) {
            throw new Error('Comment not found');
        }
        const newsLike = await Models.NewsLike.findAndCountAll({
            where: {
                commentId
            }
        });
        return newsLike;
    },

    deleteLikes: async (newsId, userId, commentId) => {
        const news = await Models.News.findOne({
            where: {
                id: newsId
            }
        });
        if (!news) {
            throw new Error('News not found');
        }
        const newsLike = await Models.NewsLike.destroy({
            where: {
                newsId,
                userId,
                commentId
            }
        });
        return newsLike;
    }
}