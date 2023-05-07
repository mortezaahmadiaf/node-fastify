import { FastifyRequest, FastifyReply } from "fastify";

export class ValidationPolicy {
  get = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
  getById = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
  post = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
  put = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
  delete = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
  patch = (
    request: FastifyRequest,
    response: FastifyReply,
    nextFunction: any
  ) => {
    nextFunction();
  };
}
