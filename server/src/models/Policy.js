/**
 * Policy Model
 * @desc This model is used to define policies table
 * @table policies
 * @author [Sourabh Sarwan]
 */
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "policies";

  const Policy = sequelize.define(
    "Policy",
    {
      date_of_purchase: {
        type: Sequelize.DATE,
      },
      premium: {
        type: Sequelize.INTEGER,
      },
      bodily_injury_liability: {
        type: Sequelize.TINYINT,
      },
      personal_injury_protection: {
        type: Sequelize.TINYINT,
      },
      property_damage_liability: {
        type: Sequelize.TINYINT,
      },
      collision: {
        type: Sequelize.TINYINT,
      },
      comprehensive: {
        type: Sequelize.TINYINT,
      },
      customer_id: {
        type: Sequelize.INTEGER,
      },
      vehicle_id: {
        type: Sequelize.INTEGER,
      },
    },
    { tableName }
  );

  return Policy;
};
