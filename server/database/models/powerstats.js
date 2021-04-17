"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PowerStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PowerStats.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.TEXT,
      intelligence: DataTypes.INTEGER,
      strength: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      durability: DataTypes.INTEGER,
      power: DataTypes.INTEGER,
      combat: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "powerstats",
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,

      // your other configuration here
    }
  );
  return PowerStats;
};
