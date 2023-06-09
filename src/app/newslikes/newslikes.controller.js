module.exports = (newsLikeService) => ({
    createLike: async (req) => {
        const newsLike = await newsLikeService.createLikes(
            req.params.newsId,
            req.params.userId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Like created',
                data: newsLike
            }
        }
    },

    getLikesByNewsId: async (req) => {
        const newsLike = await newsLikeService.getLikesByNewsId(
            req.params.newsId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Like retrieved',
                data: newsLike
            }
        }
    },

    deleteLike: async (req) => {
        const newsLike = await newsLikeService.deleteLikes(
            req.params.newsId,
            req.params.userId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Like deleted',
                data: newsLike
            }
        }
    }

});