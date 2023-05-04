import { Mysql } from "../../Features/DB-Connections";
import { DataTypes } from "@sequelize/core";
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";
import { Model } from "@sequelize/core";
import { User } from "../User-Model/user-schema";
class Profile extends Model<
  InferAttributes<Profile, {}>,
  InferCreationAttributes<Profile, {}>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<string>;
  declare userId: CreationOptional<string>;
  declare lastName: string | null;
  declare firstName: string; // for nullable fields

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  // Note this is optional since it's only populated when explicitly requested in code

  // getters that are not attributes should be tagged using NonAttribute
  // to remove them from the model's Attribute Typings.
  // get fullName(): NonAttribute<string> {
  //   return this.firstName;
  // }

  toJSON() {
    return {
      ...this.get(),
      updatedAt: undefined,
      createdAt: undefined,
    };
  }
}

Profile.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "users-profile",
    sequelize: Mysql, // passing the `sequelize` instance is required
  }
);
// Profile.sync({ force: true }).then(() =>
//   console.log("users-profile table created")
// );
// Profile.belongsTo(User, { foreignKey: "userId" });

export interface IProfile {
  UserId: string;
  firstName: string;
  lastName?: string;
}
export interface IUpdateProfile {
  id: string;
  firstName: string;
  lastName?: string;
}
export { Profile };
