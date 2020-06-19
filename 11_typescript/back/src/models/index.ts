import { Sequelize } from "sequelize"
import Config from "../config"

import { userFactory } from "./User"
import { goodsFactory } from "./Goods"

export const sequelize = new Sequelize(Config.DB_CONNECTION_STRING, {
  define: { freezeTableName: true },
})

export const User = userFactory(sequelize)
export const Goods = goodsFactory(sequelize)

const db = {
  sequelize,
  Sequelize,
  User,
  Goods,
}

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

export default db
