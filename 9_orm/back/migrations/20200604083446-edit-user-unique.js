"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "User",
          "username",
          {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "User",
          "password",
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "User",
          "username",
          {
            type: Sequelize.STRING,
            unique: false,
          },
          { transaction: t }
        ),
        queryInterface.removeConstraint("User", "User_username_key", {
          transaction: t,
        }),
        queryInterface.removeIndex("User", "User_username_key", {
          transaction: t,
        }),
        queryInterface.changeColumn(
          "User",
          "password",
          {
            type: Sequelize.STRING,
          },
          { transaction: t }
        ),
      ]);
    });
  },
};
