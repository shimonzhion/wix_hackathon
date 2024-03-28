const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const graduateJoiSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: passwordComplexity().required(),
    birthdate: Joi.date().required(),
    address: Joi.object({
      city: Joi.string().required(),
      street: Joi.string().required(),
      district: Joi.string(),
    }).required(),
    isActive: Joi.boolean().optional(),
    service: Joi.string().optional(),
    CV: Joi.string().optional(),
    image: Joi.string().optional(),
    employmentStatus: Joi.string()
      .valid("Job seeker","Employed","Retired","Student","Unemployed","Other").default("Job seeker"),
    isEmployed: Joi.boolean().optional(),
    classOf: Joi.string().required(),
  });
  
  // Validate data against Joi schema
  function validateGraduate(data) {
    return graduateJoiSchema.validate(data);
  }

  module.exports = { validateGraduate };