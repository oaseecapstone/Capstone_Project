const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const NewsCommentService = require('./newscomments.service');

//controller
const NewsCommentController = require('./newscomments.controller')(NewsCommentService);

//validator
const NewsCommentValidator = require('./newscomments.validator');

//routes
const routes = require('./newscomments.routes')({
    router,
    NewsCommentController,
    makeExpressCallback,
    makeValidatorCallback,
    NewsCommentValidator,
});

module.exports = {
    NewsCommentController,
    NewsCommentService,
    NewsCommentRoutes: routes,
}