import { IResponseHandler, ResponseHandler } from "./respose-handler";
import { FastifyReply } from "fastify";

export class BasicController {
  Response = (res: FastifyReply, props: IResponseHandler) =>
    ResponseHandler(res, props);
}
