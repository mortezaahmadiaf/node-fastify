import { IsUUID, Length, IsDefined } from "class-validator";
import { IUpdateProfile, IProfile } from "../../../Models/schemas";
export class ProfileValidator implements IProfile {
  @IsDefined()
  @Length(4, 20)
  firstName!: string;
  @IsDefined()
  @Length(4, 20)
  lastName!: string;
  @IsDefined()
  @IsUUID("4")
  UserId!: string;
}

export class ProfileUpdateValidator implements IUpdateProfile {
  @Length(4, 20)
  firstName!: string;
  @Length(4, 20)
  lastName!: string;
  @IsDefined()
  @IsUUID("4")
  id!: string;
}
