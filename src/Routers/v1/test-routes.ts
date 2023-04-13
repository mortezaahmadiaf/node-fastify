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
  };

  private generateJWT = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.generateJWT(req, res);
  };
  private decorateJWT = (req: FastifyRequest, res: FastifyReply) => {
    this.controller.decorateJWT(req, res);
  };
}
