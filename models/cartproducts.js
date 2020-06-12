"use strict";
module.exports = (sequelize, DataTypes) => {
  const cartProducts = sequelize.define(
    "cartProducts",
    {
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  );
  cartProducts.associate = function (models) {
    // associations can be defined here
  };
  return cartProducts;
};
