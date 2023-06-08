const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const CommentLikeService = require('./commentlikes.service');

//controller
const CommentLikeController = require('./commentlikes.controller')(CommentLikeService);

//validator
const CommentLikeValidator = require('./commentlikes.validator');

//routes
const routes = require('./commentlikes.routes')({
    router,
    CommentLikeController,
    makeExpressCallback,
    makeValidatorCallback,
    CommentLikeValidator,
});

module.exports = {
    CommentLikeController,
    CommentLikeService,
    CommentLikeRoutes: routes,
}