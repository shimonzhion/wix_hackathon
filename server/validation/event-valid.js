const Joi = require('joi');
Joi.objectId = require("joi-objectid")(Joi);

const eventJoiSchema = Joi.object({
    publisher: Joi.objectId().required().messages({
        'any.required': 'Please add a publisher'
    }),
    name: Joi.string().required().messages({
        'any.required': 'Please add a name to the event',
        'string.empty': 'Please add a name to the event'
    }),
    about: Joi.string().required().messages({
        'any.required': 'Please add details about the event',
        'string.empty': 'Please add details about the event'
    }),
    location: Joi.string().required().messages({
        'any.required': 'Please add a location',
        'string.empty': 'Please add a location'
    }),
    date: Joi.date().required().messages({
        'any.required': 'Please add a date of event'
    }),
    invited: Joi.array().items(Joi.objectId()).optional(),
    RSVPs: Joi.string().valid('Yes', 'No', 'Maybe').default('No'), //I fixed Yes, No, Maybe
    image: Joi.string().optional().allow('')
});

function validateEvent(event) {
    return eventJoiSchema.validate(event);
}

module.exports = { validateEvent };
