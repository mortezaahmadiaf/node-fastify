import fastify, { FastifyInstance } from "fastify";
import { TestRouter } from "./Routers/v1";
export class Application {
  private app: FastifyInstance;
  private Port: number = 4001;
  constructor() {
    this.app = fastify({ logger: true });
    this.routes();
  }

  private routes = () => {
    this.app.register(
      (fastify, opts, done) => new TestRouter(fastify, opts, done),
      { prefix: "/test" }
    );
  };
  startServer = () => {
    this.app.listen({ port: this.Port }, (error, address) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  };
}
