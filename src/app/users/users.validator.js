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

module.exports = {
    createUserSchema,
    getUserByIdSchema,
};