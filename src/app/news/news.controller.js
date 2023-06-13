module.exports = (newsService) => ({
    getAllNews: async (req) => {
        const news = await newsService.getAllNews();

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News retrieved',
                data: news
            }
        }
    },

    getNewsById: async (req, res) => {
        const news = await newsService.getNewsById(req.params.id);

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News retrieved',
                data: news
            }   
        }
    },

    getNewsByKeyword: async (req, res) => {
        const news = await newsService.getNewsByKeyword(req.params.keyword);
        const totalResult = news.length;

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News retrieved',
                totalResult,
                data: news
            }
        }
    },

    createNews: async (req) => {
        console.log(req.body);
        const news = await newsService.createNews(
            req.body
            );


        return {
            statusCode: 201,
            body: {
                status: 'success',
                message: 'News created',
                data: news
            }
        }
    },

    searchNewsByTitle: async (req) => {
        console.log(req);
        const news = await newsService.getNewsByTitle(req.query);

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News retrieved',
                data: news
            }
        }
    }
})

