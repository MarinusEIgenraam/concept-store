"use strict";
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "cart",
    {
      userId: DataTypes.INTEGER,
      cartDateAdded: DataTypes.INTEGER,
    },
    {}
  );
  cart.associate = function (models) {
    // associations can be defined here
  };
  return cart;
};
