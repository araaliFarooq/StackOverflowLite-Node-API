/*
Middleware handle requests before they can be passed to the controller which
execute the request
middleware never complete a request they just check and verify the request before
calling the controller
Middleware can perform tasks like authentication validation
all middleware must contain req, res, next in there parrams


/ */
import JoiMiddleware from './JoiValidator';
import UserMiddleware from './user-middleware';
import SecureRoute from './SecureRoute';
import UserValidations from './validations/user-validations';

export { JoiMiddleware, UserMiddleware, SecureRoute, UserValidations };
