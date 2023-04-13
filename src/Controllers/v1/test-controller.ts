import { FastifyReply, FastifyRequest } from "fastify";
import { ResponseHandler } from "../../Features/Utilities";

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
}
