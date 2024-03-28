const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);


const jobJoiSchema = Joi.object({
    description: Joi.string().required().messages({
        'any.required': 'Please add a description',
        'string.empty': 'Please add a description'
    }),
    role: Joi.string().required().messages({
        'any.required': 'Please add a role',
        'string.empty': 'Please add a role'
    }),
    company: Joi.string().required().messages({
        'any.required': 'Please add a company',
        'string.empty': 'Please add a company'
    }),
    location: Joi.string().required().messages({
        'any.required': 'Please add a location',
        'string.empty': 'Please add a location'
    }),
    coordinator: Joi.objectId().optional(),
    apply: Joi.array().items(Joi.objectId()).optional()
});

function validateJob(job) {
    return jobJoiSchema.validate(job);
}

module.exports = { validateJob };
