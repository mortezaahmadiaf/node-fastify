export {
  IProfile,
  IUpdateProfile,
  IProfileI,
} from "./Profile-Model/profile-schema";
export {
  ISaltUser,
  IUser,
  IUpdateUser,
  IUpdateUserPasswod,
  IUpdateUserPasswodSalt,
  IUserI,
  IUserProfile,
} from "./User-Model/user-schema";

export interface IRecordOfAny {
  [key: string]: any;
}

export interface IGENjwt {
  statusCode: string;
  payload?: {
    data?:
      | any
      | {
          token?: string;
          message?: string;
        };
  };
}

export interface IId {
  id: string;
}

export interface IToken {
  token: string;
}
