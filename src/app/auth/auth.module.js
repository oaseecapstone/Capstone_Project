const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const AuthService = require('./auth.service');

//controller
const AuthController = require('./auth.controller')(AuthService);

//validator
const AuthValidator = require('./auth.validator');

//routes
const routes = require('./auth.routes')({
    router,
    AuthController,
    makeExpressCallback,
    makeValidatorCallback,
    AuthValidator,
});

module.exports = {
    AuthController,
    AuthService,
    AuthRoutes: routes,
}


