"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        firstName: "Christopher",
        lastName: "Columbus",
        email: "world@explorer.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Karel",
        lastName: "de Grote",
        email: "koning@defranken.com",
        password: bcrypt.hashSync("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
