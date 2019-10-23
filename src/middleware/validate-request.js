export default class ValidateRequest {
  static validateParamExistence(req, res, next, queryName) {
    if (!(queryName in req.query)) {
      return res.status(400).send({
        success: false,
        message: `Missing ${queryName} in query params`
      });
    }
    return next();
  }
}
