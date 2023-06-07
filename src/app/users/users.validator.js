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

const getUserByIdSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    });

    return schema.validate(httpRequest.params, options);
};

const updateUserSchema = (httpRequest) => {
    const schema = Joi.object({
        id: Joi.number(),
        name: Joi.string(),
        phone: Joi.string().pattern(/^08\d{8,}$/).message('Phone number should 08xxxxxxxxxx'),
        email: Joi.string().email(),
    });

    return schema.validate(httpRequest.body, options);
};


module.exports = {
    getUserByIdSchema,
    updateUserSchema,
};