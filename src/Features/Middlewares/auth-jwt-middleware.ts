import { FastifyRequest, FastifyReply } from "fastify";
import { ResponseHandler, jwtDecorator } from "../Utilities";
// a middleware to check jsonwebtoken
export const authJwt = (request: any, response: FastifyReply, Next: any) => {
  // take jwt from request hesder
  const jwtToken = request.headers["jwt"];
  // if token not exist
  if (!jwtToken)
    // send access denied
    return ResponseHandler(response, {
      statusCode: "Unauthorized",
      error: { message: "Unauthorized User" },
    });
  // sendError({ response, status: 401, message: { error: 'access denied', errorMsg: 'first send get request to /test/jwt when recive token put it in header with keyname jwt and send request' } });
  // if token exist
  else
    try {
      // check decript jwt by JWT_TOKEN_SECURE_STRING
      const verified = jwtDecorator(jwtToken);
      //if   decript jwt by JWT_TOKEN_SECURE_STRING dont have problem add userId to request header
      request["validJWT"] = verified;
      // call next
      Next();
    } catch (error) {
      //if   decript jwt by JWT_TOKEN_SECURE_STRING have problem send invalid user to client
      ResponseHandler(response, {
        statusCode: "Unauthorized",
        error: { message: "Unauthorized User" },
      });
    }
};
