const bcrypt = require("bcrypt");
const saltRounds = 10;

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      [
        {
          username: "demo",
          password: bcrypt.hashSync("demo", bcrypt.genSaltSync(saltRounds)),
          address: "demo address",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", { username: "demo" }, {});
  },
};
