import { UserModel } from "./user-model";
import { IUser, IUpdateUser } from "../schemas";
import { genRandomString, encription } from "../../Features/Utilities";
export class UserManager {
  private userModel: UserModel = new UserModel();
  create = async (props: IUser) => {
    try {
      const salt = genRandomString();
      const hashPass = encription(props.password, salt);
      const result = await this.userModel.create({
        ...props,
        password: hashPass,
        salt,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  update = async (props: IUpdateUser) => {
    try {
      const salt = genRandomString();
      const hashPass = encription(props.password, salt);

      const result = await this.userModel.update({
        ...props,
        password: hashPass,
        salt,
      });
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  delete = async (id: string) => {
    try {
      // await this.validation.idValidator(id);
      const result = await this.userModel.delete(id);
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  getById = async (id: string) => {
    try {
      // await this.validation.idValidator(id);
      const result = await this.userModel.getById(id);
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  getAll = async () => {
    try {
      const result = await this.userModel.getAll();
      return result;
    } catch (error) {
      throw error; // return error;
    }
  };
  patch = async () => {};
}
