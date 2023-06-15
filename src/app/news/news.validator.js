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

const getNewsByIdSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const getNewsByKeywordSchema = (httpRequest) => {
    const schema = Joi.object({
        keyword: Joi.string().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const createNewsSchema = (httpRequest) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        timestamp: Joi.date(),
        fulltext: Joi.string().required(),
        sentiment: Joi.string().required(),
        score: Joi.number(),
        url: Joi.string(),
        summarize: Joi.string().required(),
        keyword: Joi.string().required(),
    });

    return schema.validate(httpRequest.body, options);
}

module.exports = {
    getNewsByIdSchema,
    getNewsByKeywordSchema,
    createNewsSchema,
};