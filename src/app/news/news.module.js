const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const NewsService = require('./news.service');

//controller
const NewsController = require('./news.controller')(NewsService);

//validator
const NewsValidator = require('./news.validator');

//routes
const routes = require('./news.routes')({
    router,
    NewsController,
    makeExpressCallback,
    makeValidatorCallback,
    NewsValidator,
});

module.exports = {
    NewsController,
    NewsService,
    NewsRoutes: routes,
}
