const Joi = require('joi');

const option = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
};

const postLoginSchema = (httpRequest) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    return schema.validate(httpRequest.body, option);
};

const postRegisterSchema = (httpRequest) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        password: Joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Password should be minimum eight characters, at least one letter and one number'),
        email: Joi.string().required().email(),
        gender: Joi.string().required(),
    });

    return schema.validate(httpRequest.body, option);
};
module.exports = {
    postLoginSchema,
    postRegisterSchema,
};