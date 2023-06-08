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

const getNewsCommentByIdSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const createNewsCommentSchema = (httpRequest) => {
    const schema = Joi.object({
        // newsId: Joi.number().required(),
        comment: Joi.string().required(),
        comment_time: Joi.date().required(),
    });

    return schema.validate(httpRequest.body, options);
}

const deleteNewsCommentSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const getNewsCommentByNewsIdSchema = (httpRequest) => {
    const schema = Joi.object({
        newsId: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const getNewsCommentByUserIdSchema = (httpRequest) => {
    const schema = Joi.object({
        userId: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

module.exports = {
    getNewsCommentByIdSchema,
    createNewsCommentSchema,
    deleteNewsCommentSchema,
    getNewsCommentByNewsIdSchema,
    getNewsCommentByUserIdSchema,
};
