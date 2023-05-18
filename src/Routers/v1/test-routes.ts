import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BaseRouter } from "../../Features/Utilities";
import { TestController } from "../../Controllers/v1";
import { authJwt } from "../../Features/Middlewares";
import { AccessPolicy } from "../../Features/Policies";
export class TestRouter extends BaseRouter {
  constructor(fastify: FastifyInstance, opts: any, done: any) {
    super(TestController, fastify, opts, done);
    this.init();
  }

  init = () => {
    const accessPolicy = new AccessPolicy();
    accessPolicy.get = authJwt;
    super.init(accessPolicy);
    this.router.get(
      "/jwt-generate",
      (req: FastifyRequest, res: FastifyReply) => {
        this.generateJWT(req, res);
      }
    );

    this.router.post(
      "/jwt-decorate",
      (req: FastifyRequest, res: FastifyReply) => {
        this.decorateJWT(req, res);
      }
    );
    this.router.get("/redis/:key", (req: FastifyRequest, res: FastifyReply) => {
      this.redisGetItem(req, res);
    });

    this.router.post("/redis", (req: FastifyRequest, res: FastifyReply) => {
      this.redisSetItem(req, res);
    });
    this.router.post("/rabbitmq", (req: FastifyRequest, res: FastifyReply) => {
      this.rabbitmq(req, res);
    });
  };

  private generateJWT = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.generateJWT(req, res);
  };
  private decorateJWT = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.decorateJWT(req, res);
  };
  private redisSetItem = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.redisSetItem(req, res);
  };
  private redisGetItem = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.redisGetItem(req, res);
  };
  private rabbitmq = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.rabbitmq(req, res);
  };
}
