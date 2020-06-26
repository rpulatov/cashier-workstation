const bcrypt = require("bcrypt");
const saltRounds = 10;

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return queryInterface.bulkInsert("User", [
      {
        username: "demo",
        address: "demo address",
        password: bcrypt.hashSync("demo", salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", { username: "demo" }, {});
  },
};
