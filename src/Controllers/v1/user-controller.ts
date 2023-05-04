import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BasicController } from "../../Features/Utilities";
import { UserManager } from "../../Models";
import { IUser, IUpdateUser } from "../../Models/schemas";
export class UserController extends BasicController {
  private userManager: UserManager = new UserManager();

  async add(req: any, response: FastifyReply, next: any) {
    const data: IUser = req.body;
    try {
      const res = await this.userManager.create(data);
      this.Response(response, {
        statusCode: "Created",
        payload: { data: res },
      });
    } catch (errors: any) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async update(req: any, response: FastifyReply, next: any) {
    const data: IUpdateUser = req.body;
    try {
      const res = await this.userManager.update(data);
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async delete(req: any, response: FastifyReply, next: any) {
    const { id }: { id: string } = req.body;
    try {
      const res = await this.userManager.delete(id);
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async findOne(req: any, response: FastifyReply, next: any) {
    const id = req.params.id;
    try {
      const res = await this.userManager.getById(id);
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async findAll(req: any, response: FastifyReply, next: any) {
    try {
      const res = await this.userManager.getAll();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async patch(req: any, response: FastifyReply, next: any) {
    try {
      const res = await this.userManager.patch();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
}
