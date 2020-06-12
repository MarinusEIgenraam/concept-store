"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        name: "Brainfart",
        imageUrl:
          "https://www.flaticon.com/premium-icon/icons/svg/2980/2980298.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Calculated",
        imageUrl: "https://image.flaticon.com/icons/svg/2643/2643513.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
