const Joi = require('joi');

const option = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
};

const postLoginSchema = (httpRequest) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    return schema.validate(httpRequest.body, option);
};

const postRegisterSchema = (httpRequest) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        fullname: Joi.string().required(),
        phone: Joi.string().required(),
    });

    return schema.validate(httpRequest.body, option);
};

module.exports = {
    postLoginSchema,
    postRegisterSchema,
};