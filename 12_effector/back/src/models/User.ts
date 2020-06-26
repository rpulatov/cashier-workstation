import { DataTypes, Sequelize, Model, BuildOptions } from "sequelize";

export interface IUser extends Model {
  id?: number;
  username: string;
  password: string;
  address: string;
  createdAt?: string
  updatedAt?: string
}

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUser;
}


export const userFactory = (sequelize: Sequelize) => {
  const User = <UserStatic>sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      address: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );

  //@ts-ignore
  User.associate = function (models: any) {
    // associations can be defined here
  };
  return User;
};
