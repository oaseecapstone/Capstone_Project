const Joi = require('joi');

const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
    errors: {
        wrap: {
            label: '',
        },
    },
};

const getNewsLikeByNewsIdSchema = (httpRequest) => {
    const schema = Joi.object({
        newsId: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const createNewsLikeSchema = (httpRequest) => {
    const schema = Joi.object({
        // newsId: Joi.number().required(),
        // userId: Joi.number().required(),
    });

    return schema.validate(httpRequest.body, options);
}

const deleteNewsLikeSchema = (httpRequest) => {
    const schema = Joi.object({
        // newsId: Joi.number().required(),
        // userId: Joi.number().required(),
    });

    return schema.validate(httpRequest.body, options);
}

module.exports = {
    getNewsLikeByNewsIdSchema,
    createNewsLikeSchema,
    deleteNewsLikeSchema,
};
