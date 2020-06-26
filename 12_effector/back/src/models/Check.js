"use strict";
module.exports = (sequelize, DataTypes) => {
  const Check = sequelize.define(
    "Check",
    {
      date: DataTypes.DATE,
      status: DataTypes.INTEGER,
      operator: DataTypes.STRING,
      organizationName: DataTypes.STRING,
      organizationAddres: DataTypes.STRING,
      inn: DataTypes.STRING,
      totalSum: DataTypes.DECIMAL(20, 2),
    },
    {}
  );
  Check.associate = function (models) {
    models.Check.hasMany(models.CheckPosition, {
      as: "positions",
      foreignKey: "checkId",
    });
    models.Check.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
  };
  return Check;
};
