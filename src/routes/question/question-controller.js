import { QuestionService } from '../../services';

export default class QuestionController {
  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns {Promise<Response>} with array of question details.
   */
  static async postQuestion(req, res) {
    try {
      const {
        body: { title, qstnbody }
      } = req;
      let exception = '';

      const qstnBytitle = await QuestionService.findOneQuestion({ title });
      const qstnBybody = await QuestionService.findOneQuestion({ qstnbody });
      if (qstnBytitle || qstnBybody) {
        exception = qstnBytitle
          ? `Title "${title}" is already in use`
          : 'This question already exists. Check out its answers';
      }
      if (exception) {
        return res.status(409).send({ message: exception });
      }
      const data = { ...req.body, userId: req.user.id };
      const question = await QuestionService.postQuestion({ ...data });
      return res.status(201).send({ question });
    } catch (error) {
      return res.status(500).send({
        message: error.message || 'Couldnot post question',
        success: false
      });
    }
  }
}
