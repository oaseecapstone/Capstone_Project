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
        username: Joi.string().required().messages({
            'string.base': 'Username must be a string',
            'string.empty': 'Username must not be empty',
        }),
        password: Joi.string().required(),
        password: Joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Password should be minimum eight characters, at least one letter and one number'),
        email: Joi.string().required().email(),
        fullname: Joi.string().required(),
        phone: Joi.string().required().pattern(/^08\d{8,}$/).message('Phone number should 08xxxxxxxxxx'),
    });

    return schema.validate(httpRequest.body, option);
};
module.exports = {
    postLoginSchema,
    postRegisterSchema,
};