import { FastifyReply, FastifyRequest } from "fastify";
import {
  ResponseHandler,
  jwtDecorator,
  jwtGenerator,
} from "../../Features/Utilities";

export class TestController {
  add(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Post Api" },
    });
  }
  update(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Put Api" },
    });
  }
  delete(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Delete Api" },
    });
  }
  findOne(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Get By Id Api" },
    });
  }
  findAll(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Get All Api" },
    });
  }
  patch(req: FastifyRequest, response: FastifyReply) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Patch Api" },
    });
  }
  generateJWT(req: FastifyRequest, response: FastifyReply) {
    const token = jwtGenerator({ message: "hello world!" });

    ResponseHandler(response, {
      statusCode: "OK",
      payload: {
        data: {
          token,
          message:
            "send token to jwt-decorate with token in body with post method",
        },
      },
    });
  }
  decorateJWT(req: any, response: FastifyReply) {
    const data =req.body?.token? jwtDecorator(req.body.token ):"Please send token in body";
    ResponseHandler(response, {
      statusCode: "OK",
      payload: {
        data,
      },
    });
  }
}
