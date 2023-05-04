import { Mysql } from "../../Features/DB-Connections";
import { DataTypes } from "@sequelize/core";
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";
import { Model } from "@sequelize/core";
import { Profile } from "../Profile-Model/profile-schema";

class User extends Model<
  InferAttributes<User, {}>,
  InferCreationAttributes<User, {}>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<string>;
  declare username: string;
  declare password: string;
  declare salt: string;

  // for nullable fields

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
  //   return this.password;
  // }

  toJSON() {
    return {
      ...this.get(),
      updatedAt: undefined,
      createdAt: undefined,
      password: undefined,
      salt: undefined,
    };
  }
}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "users",
    sequelize: Mysql, // passing the `sequelize` instance is required
  }
);
User.hasOne(Profile, {
  foreignKey: "userId",
  as: "profile",
});

// User.hasOne(User, { as: "profile" });

// User.sync({ force: true }).then(() => console.log("User table created"));

export interface IUser {
  username: string;
  password: string;
}
export interface ISaltUser {
  username: string;
  password: string;
  salt: string;
}

export interface IUpdateUserPasswod {
  id: string;
  password: string;
}
export interface IUpdateUserPasswodSalt {
  id: string;
  password: string;
  salt: string;
}
export interface IUpdateUser {
  username: string;
  id: string;
  password: string;
  salt?: string;
}

export { User };
