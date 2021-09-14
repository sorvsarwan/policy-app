/**
 * Region Model
 * @desc This model is used to define regions table
 * @type Lookup table
 * @table regions
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "regions";

  const Region = sequelize.define(
    "Region",
    {
      region: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { tableName }
  );

  return Region;
};
