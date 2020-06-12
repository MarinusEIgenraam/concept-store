"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL(20, 2),
      categoryId: DataTypes.INTEGER,
      creatorId: DataTypes.INTEGER,
      creationDate: DataTypes.DATEONLY,
    },
    {}
  );
  product.associate = function (models) {
    // associations can be defined here
    product.belongsTo(models.category);
    product.belongsToMany(models.order, {
      through: "orderProduct",
      foreignKey: "productId",
    });
  };
  return product;
};
