import { FastifyReply, FastifyRequest } from "fastify";
import {
  ResponseHandler,
  genRandomString,
  jwtDecorator,
  jwtGenerator,
  Redis,
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
    const data = req.body?.token
      ? jwtDecorator(req.body.token)
      : "Please send token in body";
    ResponseHandler(response, {
      statusCode: "OK",
      payload: {
        data,
      },
    });
  }
  async redisGetItem(req: any, response: FastifyReply) {
    const { key } = req.params;
    try {
      const redis = new Redis();
      const value = await redis.redisGet(key);
      ResponseHandler(response, { statusCode: "OK", payload: { data: value } });
    } catch (error) {
      ResponseHandler(response, {
        statusCode: "BadRequest",
        error: { errors: error },
      });
    }
  }
  async redisSetItem(req: any, response: FastifyReply) {
    const props = req.body;
    try {
      const key = genRandomString();
      const redis = new Redis();

      await redis.redisSet(key, props);
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: { key } },
      });
    } catch (error) {
      ResponseHandler(response, {
        statusCode: "BadRequest",
        error: { errors: error },
      });
    }
  }
}
