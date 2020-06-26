import { Sequelize } from "sequelize";
import Config from "../config";

import { userFactory } from "./User";

export const sequelize = new Sequelize(Config.DB_CONNECTION_STRING, {
  define: { freezeTableName: true },
});

export const User = userFactory(sequelize)

const db = {
  sequelize,
  Sequelize,
  User
};

Object.values(db).forEach((modelName: any) => {
  if (modelName.associate) {
    modelName.associate(db);
  }
});

export default db;
