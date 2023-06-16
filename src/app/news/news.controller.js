module.exports = (newsService) => ({
    getAllNews: async (req) => {
        console.log("getAllNews",req);
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
        console.log("getNewsById",req)
        const news = await newsService.getNewsById(req.params.id);

        return {
            statusCode: 200,
            body: {
                status: 'success',
                message: 'News retrieved',
                data: news,
            }   
        }
    },

    getNewsByKeyword: async (req, res) => {
        console.log("getNewsByKeyword",req);
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
        console.log("createNews",req);
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
        console.log("searchNews",req);
        const news = await newsService.getNewsByTitle(req.query);
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
    }
})

