import JoiValidator from './JoiValidator';
import questionCreateSchema from '../helpers/validations/question';

export default class questionValidator {
  static validateCreateQuestion(req, res, next) {
    return JoiValidator.validateRequestBody(
      req,
      res,
      next,
      questionCreateSchema
    );
  }
}
