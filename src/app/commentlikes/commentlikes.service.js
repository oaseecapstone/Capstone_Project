const Models = require('../../models');

const CommentLikeService = {
    createLikes: async (commentId, userId, newsId) => {
        const comment = await Models.NewsComment.findOne({
            where: {
                id: commentId
            }
        });

        if (!comment) {
            throw new Error('Comment not found');
        }

        const user = await Models.User.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        const news = await Models.News.findOne({
            where: {
                id: newsId
            }
        });

        if (!news) {
            throw new Error('News not found');
        }

        const foundCommentLike = await Models.CommentLike.findOne({
            where: {
                commentId, userId, newsId
            }
        });

        if (foundCommentLike) {
            throw new Error('Comment already liked');
        }

        const commentLike = await Models.CommentLike.create({
            commentId,
            userId,
            newsId
        });
        return commentLike;
    },

    getLikesByCommentId: async (commentId) => {
        const comment = await Models.NewsComment.findOne({
            where: {
                id: commentId
            }
        });

        if (!comment) {
            throw new Error('Comment not found');
        }

        const commentLike = await Models.CommentLike.findAndCountAll({
            where: {
                commentId
            }
        });
        return commentLike;
    },

    deleteLikes: async (commentId, userId, newsId) => {
        const comment = await Models.NewsComment.findOne({
            where: {
                id: commentId
            }
        });

        if (!comment) {
            throw new Error('Comment not found');
        }

        const commentLike = await Models.CommentLike.destroy({
            where: {
                commentId,
                userId,
                newsId
            }
        });
        return commentLike;
    }
}

module.exports = CommentLikeService;
