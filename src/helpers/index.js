/*
helpers functions that help in performing a particular task
Helpers should be reusable and can perform task like validations, authorization,
token generation
helpers can be used to make a piece of code reusable

*/
import GoogleAuthentication from './google-helper';
import FacebookAuthentication from './facebook-helper';
import UserHelper from './user-helper';

export { userCreateSchema, userLoginSchema } from './validations/user';
export { hashPassword, verifyPassword } from './password-helper';
export { createToken, decodeToken } from './token-helper';
export { sendUserEmailConfirmation } from './user-helper';

export { GoogleAuthentication, UserHelper, FacebookAuthentication };
