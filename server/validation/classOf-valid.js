const Joi=require("joi");

const classOfJoiSchema=Joi.object({
    name: Joi.string().required(),
    Identifier: Joi.string().required().messages({
        'any.required': 'Please add an identifier',
        'string.empty': 'Please add an identifier'
    }),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    engagementPercentage: Joi.number().optional().min(0).max(100),
    placementPercentages: Joi.number().optional().min(0).max(100),
    coordinator: Joi.objectId().optional(),
    graduates: Joi.array().items(Joi.objectId().required()).optional()
});

function validateClassOf(classOf){
    return classOfJoiSchema.validate(classOf);
}

module.exports={ validateClassOf };

