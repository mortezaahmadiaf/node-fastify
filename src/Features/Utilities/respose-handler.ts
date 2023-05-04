import {
  HTTPStatusCode,
  ISuccess,
  IClientErrors,
  IInformationalResponses,
  IServerErrors,
} from "./http-status-code";
import { FastifyReply } from "fastify";

export interface IPayload {
  data?: any;
  [key: string]: string | number | any;
}

export interface IError {
  errorMessage?: string | Array<string>;
  errors?: any;
  [key: string]: string | number | any;
}
export interface IResponse {
  statusCode:
    | ISuccess
    | IClientErrors
    | IInformationalResponses
    | IServerErrors;
  payload?: null | IPayload;
  error?: null | IError;
}
export interface IResponseHandler extends IResponse {
  //   res?: Response;
}
export const ResponseHandler = (res: FastifyReply, props: IResponseHandler) => {
  const statusCode = HTTPStatusCode[props.statusCode];
  const response = {
    statusCode,
    status: props.statusCode,
    error: props.error,
    payload: props.payload,
  };

  res?.status(statusCode).send(response);
};
