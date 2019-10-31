import { Router } from 'express';
import { questionValidator, SecureRoute } from '../../middleware/index';
import QuestionController from './question-controller';

const questionRouter = Router();

questionRouter.post(
  '',
  SecureRoute.loginRequired,
  questionValidator.validateCreateQuestion,
  QuestionController.postQuestion
);

questionRouter.put(
  '/:id',
  SecureRoute.loginRequired,
  questionValidator.validateCreateQuestion,
  QuestionController.updateQuestion
);

export default questionRouter;
