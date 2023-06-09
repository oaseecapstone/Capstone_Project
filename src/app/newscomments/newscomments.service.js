const Models = require('../../models');
const { Sequelize } = require('sequelize')

const NewsCommentService = {
    createComment: async (news, comment) => {
        const findNews = await Models.News.findOne({
            where: {
                id: news.newsId
            }
        });

        if (!findNews) {
            throw new Error('News not found');
        }

        const findUser = await Models.User.findOne({
            where: {
                id: news.userId
            }
        });

        if (!findUser) {
            throw new Error('User not found');
        }

        const newsComment = await Models.NewsComment.create({
            newsId: news.newsId,
            userId: news.userId,
            comment: comment.comment,
            comment_time: comment.comment_time
        });

        return newsComment;
    },

    getAllComments: async (newsId) => {
        const news = await Models.News.findOne({
            where: {
                id: newsId
            }
        });
        if (!news) {
            throw new Error('News not found');
        }
        const newsComments = await Models.NewsComment.findAll({
            where: {
                newsId
            },
            include: [{
                model: Models.CommentLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM commentlike
                        WHERE commentlike.commentId = NewsComment.id
                    )`), 'countLike'],
                ]
            }, {
                model: Models.News,
                attributes: ['id', 'title', 'createdAt'],
            }, {
                model: Models.User,
                attributes: ['id', 'name', 'email', 'gender'],
            }]
        });
        return newsComments;
    },

    getCommentById: async (id) => {
        const newsComment = await Models.NewsComment.findOne({
            where: {
                id
            },
            include: [{
                model: Models.CommentLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM commentlike
                        WHERE commentlike.commentId = NewsComment.id
                    )`), 'countLike'],
                ]
            }, {
                model: Models.News,
                attributes: ['id', 'title', 'createdAt'],
            }, {
                model: Models.User,
                attributes: ['id', 'name', 'email', 'gender'],
            }]
        });

        if (!newsComment) {
            throw new Error('Comment not found');
        }
        return newsComment;
    },

    deleteComment: async (id) => {
        const newsComment = await Models.NewsComment.findOne({
            where: {
                id
            }
        });
        if (!newsComment) {
            throw new Error('Comment not found');
        }
        await Models.NewsComment.destroy({
            where: {
                id
            }
        });
        return newsComment;
    },

    getCommentByUserId: async (userId) => {
        const newsComment = await Models.NewsComment.findAll({
            where: {
                userId
            },
            include: [{
                model: Models.CommentLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM commentlike
                        WHERE commentlike.commentId = NewsComment.id
                    )`), 'countLike'],
                ]
            }, {
                model: Models.User,
                attributes: ['id', 'name', 'email', 'gender'],
            }],
        });
        return newsComment;
    },

    getCommentByNewsId: async (newsId) => {
        const newsComment = await Models.NewsComment.findAll({
            where: {
                newsId
            },
            include: [{
                model: Models.CommentLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM commentlike
                        WHERE commentlike.commentId = NewsComment.id
                    )`), 'countLike'],
                ]
            }, {
                model: Models.News,
                attributes: ['id', 'title', 'createdAt'],
            }]
        });
        return newsComment;
    },
}

module.exports = NewsCommentService;