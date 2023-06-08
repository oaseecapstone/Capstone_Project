const Models = require('../../models');

const NewsLikeService = {
    createLikes: async (newsId, userId) => {
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
            userId
        });
        return newsLike;
    },

    getLikesByNewsId: async (newsId) => {
        const news = await Models.News.findOne({
            where: {
                id: newsId
            }
        });
        if (!news) {
            throw new Error('News not found');
        }
        const newsLike = await Models.NewsLike.findAndCountAll({
            where: {
                newsId
            }
        });
        return newsLike;
    },

    deleteLikes: async (newsId, userId) => {
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
                userId
            }
        });
        return newsLike;
    }
}

module.exports = NewsLikeService;