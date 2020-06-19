import { Model, BuildOptions, Sequelize, DataTypes } from "sequelize"

export interface UserAttributes extends Model {
  id?: number
  username: string
  password: string
  address: string
  createdAt?: string
  updatedAt?: string
}

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserAttributes
}

export function userFactory(sequelize: Sequelize) {
  const User = <UserStatic>sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: { type: DataTypes.STRING, allowNull: false },
      address: DataTypes.STRING,
    },
    {}
  )

  // @ts-ignore
  User.associate = function (models: any) {
    // associations can be defined here
  }
  return User
}
