import * as Joi from '@hapi/joi';

const userCreateSchema = Joi.object()
  .keys({
    username: Joi.string()
      .required()
      .trim(),
    password: Joi.string()
      .required()
      .trim(),
    email: Joi.string()
      .email()
      .required()
      .trim(),
    confirmPassword: Joi.string()
      .required()
      .trim()
  })
  .min(4)
  .max(4);

const userLoginSchema = Joi.object()
  .keys({
    username: Joi.string()
      .required()
      .trim(),
    password: Joi.string()
      .required()
      .trim()
  })
  .min(2)
  .max(2);

export { userCreateSchema, userLoginSchema };
