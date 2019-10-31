import { models } from '../database';

export default class QuestionService {
  /**
   * @param  {object} options
   * @returns {Promise} any
   * @description returns a single question object basing on the options
   */
  static async findOneQuestion(option) {
    const question = await models.Question.findOne(option);
    return question;
  }

  /**
   * @param  {object} data
   * @returns {Promise}
   * @description creates a single question object from data object
   *
   */
  static async postQuestion(data) {
    const newQuestion = await models.Question.create({ ...data });
    return newQuestion;
  }
}
