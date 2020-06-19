import { Model, BuildOptions, Sequelize, DataTypes } from "sequelize"

export interface GoodsAttributes extends Model {
  uid: string
  name: string
  price: number
  bonus: number
  place: string
  unit: string
  quantity: number
  arrivalDate: string
  store: string
  lot: string
  pku: boolean
  r: boolean
  shelfLife: string
  producer: string
  barcode: number
  createdAt?: string
  updatedAt?: string
}

type GoodsStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GoodsAttributes
}

export function goodsFactory(sequelize: Sequelize) {
  const Goods = <GoodsStatic>sequelize.define("Goods", {
    uid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(20, 2),
    bonus: DataTypes.DECIMAL(20, 2),
    place: DataTypes.STRING,
    unit: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    arrivalDate: DataTypes.DATE,
    store: DataTypes.STRING,
    lot: DataTypes.STRING,
    pku: DataTypes.BOOLEAN,
    r: DataTypes.BOOLEAN,
    shelfLife: DataTypes.DATE,
    producer: DataTypes.STRING,
    barcode: DataTypes.NUMBER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  })

  // @ts-ignore
  Goods.associate = function (models: any) {
    // associations can be defined here
  }
  return Goods
}
