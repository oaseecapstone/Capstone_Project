module.exports = (commentLikeService) => ({
    createLikes: async (req) => {
        const commentLike = await commentLikeService.createLikes(
            req.params.commentId,
            req.params.userId,
            req.params.newsId
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'Comment Like created',
                data: commentLike
            }
        }
    },

    getLikesByCommentId: async (req) => {
        const commentLike = await commentLikeService.getLikesByCommentId(
            req.params.commentId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'Comment Like retrieved',
                data: commentLike
            }
        }
    },

    deleteLikes: async (req) => {
        const commentLike = await commentLikeService.deleteLikes(
            req.params.commentId,
            req.params.userId,
            req.params.newsId
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'Comment Like deleted',
                data: commentLike
            }
        }
    }
})