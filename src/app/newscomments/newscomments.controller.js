module.exports = (newsCommentService) => ({
    getAllNewsComments: async () => {
        const newsComments = await newsCommentService.getAllComments();

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comments retrieved',
                data: newsComments
            }
        }
    },

    getNewsCommentById: async (req) => {
        const newsComment = await newsCommentService.getCommentById(
            req.params.id
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comment retrieved',
                data: newsComment
            }
        }
    },

    createNewsComment: async (req) => {
        console.log(req.params);
        console.log(req.body);
        const newsComment = await newsCommentService.createComment(
            req.params,
            req.body
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comment created',
                data: newsComment
            }
        }
    },

    deleteNewsComment: async (req) => {
        const newsComment = await newsCommentService.deleteComment(
            req.params.id,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comment deleted',
                data: newsComment
            }
        }
    },

    getNewsCommentByNewsId: async (req) => {
        const newsComments = await newsCommentService.getCommentByNewsId(
            req.params.newsId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comments retrieved',
                data: newsComments
            }
        }
    },

    getNewsCommentByUserId: async (req) => {
        const newsComments = await newsCommentService.getCommentByUserId(
            req.params.userId,
        );

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News Comments retrieved',
                data: newsComments
            }
        }
    }

});