"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: DataTypes.INTEGER,
      dateCreated: DataTypes.STRING,
      deliveryAdresId: DataTypes.STRING,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsToMany(models.product, {
      through: "orderProducts",
      foreignKey: "orderId",
    });
  };
  return order;
};
