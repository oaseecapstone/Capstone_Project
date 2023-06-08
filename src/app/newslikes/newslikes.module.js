const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const NewsLikeService = require('./newslikes.service');

//controller
const NewsLikeController = require('./newslikes.controller')(NewsLikeService);

//validator
const NewsLikeValidator = require('./newslikes.validator');

//routes
const routes = require('./newslikes.routes')({
    router,
    NewsLikeController,
    makeExpressCallback,
    makeValidatorCallback,
    NewsLikeValidator,
});

module.exports = {
    NewsLikeController,
    NewsLikeService,
    NewsLikeRoutes: routes,
}