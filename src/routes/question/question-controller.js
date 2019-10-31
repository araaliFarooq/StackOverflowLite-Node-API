import { QuestionService } from '../../services';

export default class QuestionController {
  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns {Promise<Response>} with array of question details.
   */
  static async postQuestion(req, res) {
    try {
      const exception = await QuestionController.validateDocs(req);
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

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns {Promise<Response>} with array of edited question details.
   */
  static async updateQuestion(req, res) {
    try {
      const qstnId = req.params.id;
      const userId = req.user.id;

      const qstnById = await QuestionService.findOneQuestion({ _id: qstnId });
      if (!qstnById) {
        return res
          .status(400)
          .send({ message: 'Question does not exist', success: false });
      }
      if (qstnById.userId.equals(userId)) {
        const exception = await QuestionController.validateDocs(req);
        if (exception) {
          return res.status(409).send({ message: exception });
        }
        const data = { ...req.body };
        const updatedQuestion = QuestionService.updateQuestion(qstnId, {
          ...data
        });
        return res.status(200).send({ updatedQuestion });
      }
      return res
        .status(401)
        .send({ message: 'unauthorized to edit question', success: false });
    } catch (error) {
      return res.status(500).send({
        message: error.message || 'Couldnot edit question',
        success: false
      });
    }
  }

  static async validateDocs(req) {
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
    return exception;
  }
}
