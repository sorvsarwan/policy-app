/**
 * Vehicle Model
 * @desc This model is used to define vehicles table
 * @table vehicles
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "vehicles";

  const Vehicle = sequelize.define(
    "Vehicle",
    {
      fuel_id: {
        type: Sequelize.INTEGER,
      },
      segment_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName }
  );
  return Vehicle;
};
