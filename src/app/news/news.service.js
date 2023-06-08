const Models = require('../../models');
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

        return news;
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
            title, author, time, sentiment, score, Url, summarize, keyword
        } = news;

        const newNews = await Models.News.create({
            title,
            author,
            time,
            sentiment,
            score,
            Url,
            summarize,
            keyword
        });

        return newNews;
    },

}

module.exports = NewsService;