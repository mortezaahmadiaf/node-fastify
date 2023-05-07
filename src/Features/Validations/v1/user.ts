import { IsUUID, Length, IsDefined } from "class-validator";
import { IUser, IUpdateUser } from "../../../Models/schemas";
export class UserValidator implements IUser {
  @IsDefined()
  username!: string;
  @IsDefined()
  @Length(4, 20)
  password!: string;
}

export class UserUpdateValidator implements IUpdateUser {
  @Length(10, 20)
  username!: string;

  @Length(4, 20)
  password!: string;
  @IsDefined()
  @IsUUID("4")
  id!: string;
}
