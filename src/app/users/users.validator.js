const Joi = require('joi');

const option = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
};

const getUserByIdSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, option);
};

const updateUserSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number(),
        fullname: Joi.string(),
        phone: Joi.string().pattern(/^08\d{8,}$/).message('Phone number should 08xxxxxxxxxx'),
        email: Joi.string().email(),
        image: Joi.string().allow(null, ''),
    });

    return schema.validate(httpRequest.body, option);
};


module.exports = {
    getUserByIdSchema,
    updateUserSchema,
};