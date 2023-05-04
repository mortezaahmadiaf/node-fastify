import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BasicController } from "../../Features/Utilities";
import { ProfileManager } from "../../Models";
import { IProfile, IUpdateProfile } from "../../Models/schemas";
export class ProfileController extends BasicController {
  private profileManager: ProfileManager = new ProfileManager();

  async add(req: any, response: FastifyReply, next: any) {
    const data: IProfile = req.body;
    try {
      const res = await this.profileManager.create(data);
      this.Response(response, {
        statusCode: "Created",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async update(req: any, response: FastifyReply, next: any) {
    const data: IUpdateProfile = req.body;

    try {
      const res = await this.profileManager.update(data);
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
    const id: string = req.body.id;
    try {
      const res = await this.profileManager.delete(id);
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
    const id: string = req.params.id;

    try {
      const res = await this.profileManager.getById(id);
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
      const res = await this.profileManager.getAll();
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
      const res = await this.profileManager.patch();
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
