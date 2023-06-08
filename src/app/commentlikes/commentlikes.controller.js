module.exports = (newsLikesService) => ({
    createLike: async (req) => {
        const newsLike = await newsLikesService.createLike(
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
        const newsLike = await newsLikesService.getLikesByNewsId(
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
        const newsLike = await newsLikesService.deleteLike(
            req.params.newsId,
            req.body.like,
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
})