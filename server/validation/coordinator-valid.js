const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const coordinatorJoiSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: passwordComplexity().required(),
    image: Joi.string().optional(),
    employeeNumber: Joi.string()
      .valid("Job seeker","Employed","Retired","Student","Unemployed","Other").default("Job seeker"),
    isEmployed: Joi.boolean().optional(),
    classOf: Joi.string().required(),
  });
  
  // Validate data against Joi schema
  function validateCordiantor(data) {
    return coordinatorJoiSchema.validate(data);
  }

  module.exports = { validateCordiantor };