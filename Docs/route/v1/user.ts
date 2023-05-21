import { IUser, IUpdateUser, IUserI, IId } from "../../../src/Models/schemas";
import {
  Body,
  Controller,
  Get,
  Path,
  Delete,
  Put,
  Post,
  Query,
  Patch,
  Route,
  SuccessResponse,
  Security,
  Response,
  Header,
} from "tsoa";

@Route("user")
export class UserManager extends Controller {
  @Security("jwt", ["token"])
  @Get("/")
  async getAll(@Header("jwt") jwt: string): Promise<Array<IUserI> | null> {
    return [{ id: "", username: "" }];
  }
  @Security("jwt", ["token"])
  @Get("id/{id}")
  async getById(@Header("jwt") jwt: string, id: string): Promise<IUserI> {
    return { id: "", username: "" };
  }
  @Security("jwt", ["token"])
  @Post("/")
  async create(
    @Header("jwt") jwt: string,
    @Body() requestBody: IUser
  ): Promise<IUserI> {
    return { id: "", username: "" };
  }

  @Security("jwt", ["token"])
  @Put("/")
  async update(
    @Header("jwt") jwt: string,
    @Body() requestBody: IUpdateUser
  ): Promise<IUserI> {
    return { id: "", username: "" };
  }

  @Security("jwt", ["token"])
  @Delete("/")
  async delete(
    @Header("jwt") jwt: string,
    @Body() requestBody: IId
  ): Promise<string> {
    return "ok";
  }

  @Security("jwt", ["token"])
  @Patch("/")
  async patch(@Header("jwt") jwt: string): Promise<any> {}
}
