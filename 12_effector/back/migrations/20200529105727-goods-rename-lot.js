"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Goods", "set", "lot");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Goods", "lot", "set");
  },
};
