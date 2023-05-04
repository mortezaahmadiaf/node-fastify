import { ProfileModel } from "./profile-model";
import { IProfile, IUpdateProfile } from "../schemas";
export class ProfileManager {
  private profileModel: ProfileModel = new ProfileModel();
  create = async (props: IProfile) => {
    try {
      const result = await this.profileModel.create(props);
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
  update = async (props: IUpdateProfile) => {
    try {
      const result = await this.profileModel.update(props);
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
  delete = async (id: string) => {
    try {
      const result = await this.profileModel.delete(id);
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
  getById = async (id: string) => {
    try {
      const result = await this.profileModel.getById(id);
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
  getAll = async () => {
    try {
      const result = await this.profileModel.getAll();
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
  patch = async () => {
    try {
      const result = await this.profileModel.patch();
      return result;
    } catch (error: any) {
      throw error; // return error;
    }
  };
}
