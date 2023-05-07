import { FastifyRequest, FastifyReply } from "fastify";
import { validate, validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";
import { ResponseHandler } from "../Utilities";
export const validationMw = (dtoClass: any) => {
  return async function (req: FastifyRequest, res: FastifyReply, next: any) {
    try {
      const output: any = plainToInstance(dtoClass, req.body);
      await validateOrReject(output, {
        skipMissingProperties: true,
      });
      next();
    } catch (errors: any) {
      let errorTexts = Array();
      for (const errorItem of errors) {
        errorTexts = errorTexts.concat(errorItem.constraints);
      }

      ResponseHandler(res, {
        statusCode: "BadRequest",
        error: { errors: errorTexts, errorMessage: "Validation Error" },
      });
    }
  };
};
