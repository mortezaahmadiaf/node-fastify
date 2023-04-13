import chalk from "chalk";
import { FastifyRequest, FastifyReply } from "fastify";
export const preHandler = (
  request: FastifyRequest,
  response: FastifyReply,
  next: any
) => {
  console.info(
    `\n Request ===> Method: ${request.method} ___ Route: ${request.url} \n `
  );

  next();
};

export const onSend = (
  request: FastifyRequest,
  response: FastifyReply,
  next: any
) => {
  console.info(
    `\n Response ===> Method: ${request.method} ___ Route: ${
      request.url
    } ___ Status Code: ${
      response.statusCode === 200
        ? chalk.green(response.statusCode)
        : chalk.red(response.statusCode)
    } ___ Request Time: ${response.getResponseTime()} ms \n`
  );

  next();
};
