import { QuestionService } from "../../services";

export default class QuestionController {
  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns {Promise<Response>} with array of users
   */
  static async getAllQuestions(req, res) {
    const response = await QuestionService.findAllQuestions({});
    if (response.length > 0) {
      return res.status(200).send({
        data: response
      });
    }
    return res.status(204).send({
      message: "No questions posted yet"
    });
  }

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
      const question = await QuestionService.postQuestion({
        ...data
      });
      return res.status(201).send({
        question,
        message: "Question posted successfully",
        success: true
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || "Couldnot post question",
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

      const qstnById = await QuestionService.findOneQuestion({
        _id: qstnId
      });
      if (!qstnById) {
        return res.status(400).send({
          message: "Question does not exist",
          success: false
        });
      }
      if (qstnById.userId.equals(userId)) {
        const exception = await QuestionController.validateDocs(req);
        if (exception) {
          return res.status(409).send({ message: exception });
        }
        const data = { ...req.body };
        const updatedQuestion = await QuestionService.updateQuestion(qstnId, {
          ...data
        });
        return res.status(200).send({ updatedQuestion });
      }
      return res.status(401).send({
        message: "unauthorized to edit question",
        success: false
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || "Couldnot edit question",
        success: false
      });
    }
  }

  /**
   * @param  {Request} req
   * @returns {String} a specific error as a response from operation.
   */
  static async validateDocs(req) {
    const {
      body: { title, qstnbody }
    } = req;
    let exception = "";

    const qstnBytitle = await QuestionService.findOneQuestion({
      title
    });
    const qstnBybody = await QuestionService.findOneQuestion({
      qstnbody
    });
    if (qstnBytitle || qstnBybody) {
      exception = qstnBytitle
        ? `Title "${title}" is already in use`
        : "This question already exists. Check out its answers";
    }
    return exception;
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns {Promise} object containing a boolean and deletedCount .
   */
  static async deleteQuestion(req, res) {
    try {
      const qstnId = req.params.id;
      const userId = req.user.id;

      const qstnById = await QuestionService.findOneQuestion({
        _id: qstnId
      });
      if (!qstnById) {
        return res.status(400).send({
          message: "Question does not exist",
          success: false
        });
      }
      if (qstnById.userId.equals(userId)) {
        const deletedResponse = await QuestionService.deleteQuestion({
          _id: qstnId
        });
        if (deletedResponse.deletedCount > 0) {
          return res.status(200).send({
            message: "Question deleted successfully",
            success: true
          });
        }
        return res.status(400).send({
          message: "Couldnot delete question",
          success: false
        });
      }
      return res.status(401).send({
        message: "unauthorized to edit question",
        success: false
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || "Couldnot delete question",
        success: false
      });
    }
  }
}
