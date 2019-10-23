import * as Joi from '@hapi/joi';

export default class JoiValidator {
  static validateRequestBody(req, res, next, schema) {
    const { body } = req;
    const { error } = Joi.validate(body, schema, { abortEarly: false });
    const errors = [];
    if (error) {
      error.details.forEach((e) => errors.push(e.message));
      return res.status(400).json({
        success: false,
        errors
      });
    }
    return next();
  }
}
