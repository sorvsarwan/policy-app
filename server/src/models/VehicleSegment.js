/**
 * VehicleSegment Model
 * @desc This model is used to define vehicle_segments table
 * @type Lookup table
 * @table vehicle_segments
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "vehicle_segments";
  const VehicleSegment = sequelize.define(
    "VehicleSegment",
    {
      segment: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { tableName }
  );

  return VehicleSegment;
};

