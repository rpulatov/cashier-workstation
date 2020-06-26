"use strict";
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Check", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: DataTypes.DATE,
      status: DataTypes.INTEGER,
      operator: DataTypes.STRING,
      organizationName: DataTypes.STRING,
      organizationAddres: DataTypes.STRING,
      inn: DataTypes.STRING,
      totalSum: DataTypes.DECIMAL(20, 2),
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id"
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
    return queryInterface.dropTable("Check");
  },
};
