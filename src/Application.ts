import fastify, { FastifyInstance, FastifyReply } from "fastify";
import fastify, { FastifyInstance } from "fastify";
import { TestRouter, ProfileRoutes, UserRoutes } from "./Routers/v1";
import { preHandler, onSend } from "./Features/Middlewares";
import { Mysql } from "./Features/DB-Connections";
import { RabbitMQConsume } from "./Features/Utilities/rabbit-mq";
import * as swagger from "./Routers/Docs/swagger.json";
import dotenv from "dotenv";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import dotenv from "dotenv";
dotenv.config();
export class Application {
  private app: FastifyInstance;
  private Port: number = 4001;
  constructor() {
    this.app = fastify();
    this.rabbitMqConsumer();
    this.database_connection();
    this.addHook();
    this.routes();
  }

  private routes = () => {
    this.app.register(
      (fastify, opts, done) => new TestRouter(fastify, opts, done),
      { prefix: "/test" }
    );
    this.app.register(
      (fastify, opts, done) => new UserRoutes(fastify, opts, done),
      { prefix: "/user" }
    );
    this.app.register(
      (fastify, opts, done) => new ProfileRoutes(fastify, opts, done),
      { prefix: "/profile" }
    );

    this.swaggerApiDoc();
  };
  swaggerApiDoc() {
    this.app.register(fastifySwagger);
    this.app.register(fastifySwaggerUi, {
      routePrefix: "/docs",
      transformSpecification: (
        swaggerObject: any,
        request: any,
        reply: any
      ) => {
        return swagger;
      },
      transformSpecificationClone: true,
    });
  }
  };

  async rabbitMqConsumer() {
    try {
      const rabbit = new RabbitMQConsume();
      await rabbit.consumeAll();
    } catch (error) {}
  }

  private addHook = () => {
    this.app.addHook("preHandler", preHandler);
    this.app.addHook("onResponse", onSend);
  };

  private database_connection = async () => {
    try {
      await Mysql.authenticate();
      console.log("mysql : Connection has been established successfully.");
    } catch (error) {
      console.error("mysql : Unable to connect to the database:", error);
    }
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
