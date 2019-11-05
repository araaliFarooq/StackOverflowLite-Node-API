import { decodeToken } from "../helpers";

export default class SecureRoute {
  static async loginRequired(req, res, next) {
    const { headers } = req;
    const { authorization } = headers;
    if (authorization) {
      try {
        const authToken = authorization.split(" ");
        if (authToken[0] !== "Bearer") {
          return res
            .status(401)
            .send({ msg: "Unauthorized access. Login and try again" });
        }
        req.user = await decodeToken(authToken[1]);
        if (req.user === "jwt expired") {
          return res
            .status(401)
            .send({ message: "Session expired. Please login again" });
        }
        return next();
      } catch (error) {
        return res.status(403).send({ message: error });
      }
    } else {
      return res.status(401).send({ message: "No authorization headers" });
    }
  }
}
