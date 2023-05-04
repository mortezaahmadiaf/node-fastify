import { BaseRouter } from "../../Features/Utilities";
import { UserController } from "../../Controllers";
import { authJwt } from "../../Features/Middlewares";

import { AccessPolicy } from "../../Features/Policies";
import { FastifyInstance } from "fastify";
export class UserRoutes extends BaseRouter {
  constructor(fastify: FastifyInstance, opts: any, done: any) {
    super(UserController, fastify, opts, done);
    this.init();
  }

  init() {
    const accessPolicy: AccessPolicy = new AccessPolicy();
    accessPolicy.post = authJwt;
    accessPolicy.put = authJwt;
    accessPolicy.get = authJwt;
    accessPolicy.getById = authJwt;
    accessPolicy.delete = authJwt;
    accessPolicy.patch = authJwt;

    super.init(accessPolicy);
  }
}
