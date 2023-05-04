import { User, ISaltUser, IUpdateUser } from "./user-schema";
import { Profile } from "../Profile-Model/profile-schema";
export class UserModel {
  user = User;
  create = async (props: ISaltUser) => {
    try {
      const result = await this.user.create(props);
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  update = async (props: IUpdateUser) => {
    try {
      const res = await this.user.findOne({ where: { id: props.id } });
      const result = await res?.update(props);

      return result;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  delete = async (id: string) => {
    try {
      const result = await this.user.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  getById = async (id: string) => {
    try {
      const result = await this.user.findOne({
        where: { id },
        include: [{ model: Profile }],
      });
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  getAll = async () => {
    try {
      const result = await this.user.findAll({ include: [{ model: Profile }] });
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  patch = async () => {};
}
