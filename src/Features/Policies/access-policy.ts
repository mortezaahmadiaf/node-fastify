import { FastifyRequest, FastifyReply } from "fastify";

export class AccessPolicy {
  get = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
  getById = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
  post = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
  put = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
  delete = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
  patch = (request: any, response: FastifyReply, nextFunction: any) => {
    nextFunction();
  };
}
