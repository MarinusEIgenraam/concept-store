"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  category.associate = function (models) {
    category.hasMany(models.product);
  };
  return category;
};
