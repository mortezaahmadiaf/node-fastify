import { FastifyInstance } from "fastify";
import { BaseRouter } from "../../Features/Utilities";
import { TestController } from "../../Controllers/v1";
export class TestRouter extends BaseRouter {
  constructor(fastify: FastifyInstance, opts: any, done: any) {
    super(TestController, fastify, opts, done);
    this.init();
  }

  init = () => {
    super.init();
    this.router.get("/check", (req, res) => {
      res.send({ morteza: "ahmadi " });
    });
  };
}
