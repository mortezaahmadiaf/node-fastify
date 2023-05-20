import {
  IId,
  IProfileI,
  IProfile,
  IUpdateProfile,
} from "../../../src/Models/schemas";
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

@Route("profile")
export class ProfileManager extends Controller {
  @Get("/")
  async getAll(): Promise<Array<IProfileI> | null> {
    return [{ id: "", firstName: "", UserId: "", lastName: "" }];
  }

  @Get("id/{id}")
  async getById(id: string): Promise<IProfileI> {
    return { id: "", firstName: "", UserId: "", lastName: "" };
  }

  @Post("/")
  async create(@Body() requestBody: IProfile): Promise<IProfileI> {
    return { id: "", firstName: "", UserId: "", lastName: "" };
  }
  // props: IUpdateUser
  @Put("/")
  async update(@Body() requestBody: IUpdateProfile): Promise<IProfileI> {
    return { id: "", firstName: "", UserId: "", lastName: "" };
  }
  // id: string
  @Delete("/")
  async delete(@Body() requestBody: IId): Promise<string> {
    return "ok";
  }

  @Patch("/")
  async patch(): Promise<any> {
    return;
  }
}
