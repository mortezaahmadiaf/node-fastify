import { IsUUID, Length, IsDefined } from "class-validator";
export * from "./profile";
export * from "./user";

export class IdValidator {
  @Length(4, 20)
  firstName!: string;
  @Length(4, 20)
  lastName!: string;
  @IsDefined()
  @IsUUID("4")
  id!: string;
}
