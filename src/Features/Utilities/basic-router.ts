import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export class BaseRouter {
  router: FastifyInstance;
  options: any;
  controller: any;
  constructor(controller: any, fastify: FastifyInstance, opts: any, done: any) {
    this.controller = new controller();
    this.router = fastify;
    this.options = opts;
    done();
  }

  init() {
    let urls = {
      get: "/",
      getById: "/id/:id",
      post: "/",
      put: "/",
      delete: "/",
      patch: "/",
    };
    this.router.post(urls.post, (req: FastifyRequest, res: FastifyReply) => {
      this.add(req, res);
    });

    this.router.put(urls.put, (req: FastifyRequest, res: FastifyReply) => {
      this.update(req, res);
    });
    this.router.delete(
      urls.delete,
      (req: FastifyRequest, res: FastifyReply) => {
        this.delete(req, res);
      }
    );
    this.router.get(urls.get, (req: FastifyRequest, res: FastifyReply) => {
      this.findAll(req, res);
    });
    this.router.get(urls.getById, (req: FastifyRequest, res: FastifyReply) => {
      this.findOne(req, res);
    });
    this.router.patch(urls.patch, (req: FastifyRequest, res: FastifyReply) => {
      this.patch(req, res);
    });
  }
  private add(req: FastifyRequest, res: FastifyReply) {
    this.controller.add(req, res);
  }
  private update(req: FastifyRequest, res: FastifyReply) {
    this.controller.update(req, res);
  }
  private delete(req: FastifyRequest, res: FastifyReply) {
    this.controller.delete(req, res);
  }
  private findOne(req: FastifyRequest, res: FastifyReply) {
    this.controller.findOne(req, res);
  }
  private findAll(req: FastifyRequest, res: FastifyReply) {
    this.controller.findAll(req, res);
  }
  private patch(req: FastifyRequest, res: FastifyReply) {
    this.controller.patch(req, res);
  }
}