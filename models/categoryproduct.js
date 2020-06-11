'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryProduct = sequelize.define('categoryProduct', {
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  categoryProduct.associate = function(models) {
    // associations can be defined here
  };
  return categoryProduct;
};