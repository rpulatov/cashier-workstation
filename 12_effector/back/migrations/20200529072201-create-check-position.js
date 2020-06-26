"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("CheckPosition", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      sum: DataTypes.DECIMAL(20, 2),
      price: DataTypes.DECIMAL(20, 2),
      quantity: DataTypes.FLOAT,
      checkId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Check",
          key: "id"
        }
      },
      goodsUid: {
        type: DataTypes.UUID,
        references: {
          model: "Goods",
          key: "uid"
        }
      },
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
    return queryInterface.dropTable("CheckPosition");
  },
};
