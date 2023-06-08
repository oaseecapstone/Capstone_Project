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

const getCommentLikeByCommentIdSchema = (httpRequest) => {
    const schema = Joi.object({
        commentId: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
}

const createCommentLikeSchema = (httpRequest) => {
    const schema = Joi.object({
        // commentId: Joi.number().required(),
        // userId: Joi.number().required(),
        // newsId: Joi.number().required(),
    });

    return schema.validate(httpRequest.body, options);
}

const deleteCommentLikeSchema = (httpRequest) => {
    const schema = Joi.object({
        // commentId: Joi.number().required(),
        // userId: Joi.number().required(),
        // newsId: Joi.number().required(),
    });

    return schema.validate(httpRequest.body, options);
}

module.exports = {
    getCommentLikeByCommentIdSchema,
    createCommentLikeSchema,
    deleteCommentLikeSchema,
};