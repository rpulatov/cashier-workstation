"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Goods", {
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
      set: DataTypes.STRING,
      pku: DataTypes.BOOLEAN,
      r: DataTypes.BOOLEAN,
      shelfLife: DataTypes.DATE,
      producer: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Goods");
  },
};
