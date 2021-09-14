/**
 * Customer Model
 * @desc This model is used to define fuels table
 * @type Lookup table
 * @table fuels
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "fuels";
  const Fuel = sequelize.define(
    "Fuel",
    {
      fuel: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { tableName }
  );
  return Fuel;
};
