"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Goods", "barcode", {
      type: Sequelize.NUMERIC,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Goods", "barcode");
  },
};
