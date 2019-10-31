import { Router } from 'express';
import { UserMiddleware, SecureRoute, UserValidations } from '../../middleware';
import UserController from './user-controller';

const userRouter = Router();

userRouter.get('', UserController.getAllUserRecords);

userRouter.post(
  '',
  UserMiddleware.validateCreateUser,
  UserController.getAllUserRecords
);

userRouter.post(
  '/register',
  UserMiddleware.validateCreateUser,
  UserController.registerUser
);

userRouter.post('/confirmation/:token', UserController.confirmEmail);

userRouter.post(
  '/login',
  UserMiddleware.validateUserLogin,
  UserController.loginUser
);

userRouter.get('/me', SecureRoute.loginRequired, UserController.getUserProfile);

userRouter.get(
  '/google',
  UserValidations.validateAccessToken,
  UserController.googleAuthentication
);

userRouter.get(
  '/facebook',
  UserValidations.validateAccessToken,
  UserController.faceBookAuthentication
);

export default userRouter;
