"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderProduct = sequelize.define(
    "orderProduct",
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  orderProduct.associate = function (models) {
    // associations can be defined here
    orderProduct.belongsTo(models.product);
    orderProduct.belongsTo(models.order);
  };
  return orderProduct;
};
