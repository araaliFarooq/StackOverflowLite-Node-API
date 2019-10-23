import ValidateRequest from "../validate-request";

export default class UserValidations {
    static validateAccessToken(req, res, next) {
        return ValidateRequest.validateParamExistence(req, res, next,
            "accessToken");
    }
}
