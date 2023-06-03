const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

//service
const UsersService = require('./users.service');

//controller
const UsersController = require('./users.controller')(UsersService);

//validator
const UsersValidator = require('./users.validator');

//routes
const routes = require('./users.routes')({
    router,
    UsersController,
    makeExpressCallback,
    makeValidatorCallback,
    UsersValidator,
});

module.exports = {
    UsersController,
    UsersService,
    UsersRoutes: routes,
}


