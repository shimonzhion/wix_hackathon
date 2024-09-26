const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const postJoiSchema = Joi.object({
    publisher: Joi.objectId().required().messages({
        'any.required': 'Please add a publisher'
    }),
    content: Joi.string().required().messages({
        'any.required': 'Please add content',
        'string.empty': 'Please add content'
    }),
    image: Joi.string().required().messages({
        'any.required': 'Please add an image',
        'string.empty': 'Please add an image'
    })
});

function validatePost(post) {
    return postJoiSchema.validate(post);
}

module.exports = { validatePost };
