/**
 * IncomeGroup Model
 * @desc This model is used to define income_groups table
 * @type Lookup table
 * @table income_groups
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "income_groups";

  const IncomeGroup = sequelize.define(
    "IncomeGroup",
    {
      group: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { tableName }
  );

  return IncomeGroup;
};

