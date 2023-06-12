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
                const response = await axios.post('https://gethoaxnewmodel-jtlt6za6ta-uc.a.run.app/hoax-predict', {
                    input_text: fulltext
            }
            );
                return response.data.hoax_percentage;
            } catch (error) {
                console.error(error);
            }
        }

        const newsWithPredict = await Promise.all(news.map(async (item) => {
            const predictResult = await predict(item.summarize);
            return {
                ...item.toJSON(),
                score: predictResult
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

        if (!news) {
            throw new Error('News not found');
        }

        return news;
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

}

module.exports = NewsService;