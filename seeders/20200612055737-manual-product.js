"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "The egg of Columbus",
        description:
          "An egg of Columbus or Columbus' egg (Italian: uovo di Colombo [ˈwɔːvo di koˈlombo]) refers to a brilliant idea or discovery that seems simple or easy after the fact.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/85/Nikola_Tesla%27s_Egg_of_Columbus_at_1893_Chicago_Columbian_Exposition_World%27s_Fair.png",
        price: 100,
        categoryId: 2,
        creatorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
