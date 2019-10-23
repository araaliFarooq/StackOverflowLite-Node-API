import JoiValidator from './JoiValidator';
import { userCreateSchema, userLoginSchema } from '../helpers';

export default class UserValidator {
  static validateCreateUser(req, res, next) {
    return JoiValidator.validateRequestBody(req, res, next, userCreateSchema);
  }

  static validateUserLogin(req, res, next) {
    return JoiValidator.validateRequestBody(req, res, next, userLoginSchema);
  }
}
