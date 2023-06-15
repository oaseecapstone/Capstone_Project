const Models = require('../../models');
const axios = require('axios');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize')

const NewsService = {
    getAllNews: async () => {
        const news = await Models.News.findAll({
            include: [{
                model: Models.NewsLike,
            }, {
                model: Models.NewsComment,
                attributes: ['userId', 'comment', 'comment_time'],
            }]
        });

        if (!news) {
            throw new Error('News not found');
        }

        const predict = async (fulltext) => {
            try {
                const response = await axios.post('https://gethoaxnewmodel-zspbba3n6a-uc.a.run.app/hoax-predict', {
                    input_text: fulltext
            }
            );
                return response.data.hoax_percentage;
            } catch (error) {
                console.error(error);
            }
        }

        const newsWithPredict = await Promise.all(news.map(async (item) => {
            if (item.score === 0) {
            const predictResult = await predict(item.fulltext);
            return {
                ...item.toJSON(),
                score: parseInt(predictResult*100)
            }
            } else {
                return item.toJSON();
            }
        }
        ));

        await Promise.all(newsWithPredict.map(async (item) => {
            const newsInstance = await Models.News.findOne({
                where: {
                    id: item.id
                }
            });
            newsInstance.score = item.score;
            await newsInstance.save();
        }
        ));

        return newsWithPredict;
    },

    getNewsById: async (id) => {
        const news = await Models.News.findOne({
            where: {
                id,
            },
            include: [{
                model: Models.NewsLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM newslike
                        WHERE newslike.newsId = News.id
                    )`), 'countLike'],
                    ]
            }, {
                model: Models.NewsComment,
                attributes: ['userId', 'comment', 'comment_time'],
            }]
        });

        const relatedNews = await Models.News.findAll({
            where: {
                sentiment: {
                    [Op.eq]: 'positive'
                },
            },
            order: Sequelize.literal('rand()'),
            limit: 10,
        });

        if (!news) {
            throw new Error('News not found');
        }

        return {
            ...news.toJSON(),
            relatedNews
        };
    },

    getNewsByKeyword: async (keyword) => {
        const news = await Models.News.findAll({
            where: {
                title: {
                    [Op.like]: `%${keyword}%`
                }
            },
            include: [{
                model: Models.NewsLike,
                attributes: [
                    [Sequelize.literal(`(
                        SELECT COUNT(*)
                        FROM newslike
                        WHERE newslike.newsId = News.id
                    )`), 'countLike'],
                  ]
            }, {
                model: Models.NewsComment,
                attributes: ['userId', 'comment', 'comment_time'],
            }]
        });
        
        if (!news) {
            throw new Error('News not found');
        }

        return news;
    },

    createNews: async (news) => {
        const {
            title, author, score, timestamp, sentiment, url, summarize, keyword
        } = news;

        const newNews = await Models.News.create({
            title,
            author,
            score,
            timestamp,
            sentiment,
            url,
            summarize,
            keyword
        });

        return newNews;
    },

    getNewsByTitle: async (query) => {
        console.log(query);
        try {
            const news = await Models.News.findAll({
                where: {
                    title: {
                        [Op.like]: `%${query.title}%`
                    }
                },
            });
            return news;
        } catch {
            throw new Error('News not found');
        }
    }

}

module.exports = NewsService;