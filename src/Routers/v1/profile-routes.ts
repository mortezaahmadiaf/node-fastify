import { BaseRouter } from "../../Features/Utilities";
import { ProfileController } from "../../Controllers";
import { FastifyInstance } from "fastify";

export class ProfileRoutes extends BaseRouter {
  constructor(fastify: FastifyInstance, opts: any, done: any) {
    super(ProfileController, fastify, opts, done);
    this.init();
  }

  init() {
    super.init();
  }
}
