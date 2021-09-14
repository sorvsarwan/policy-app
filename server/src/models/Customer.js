/**
 * Customer Model
 * @desc This model is used to define cutomers table
 * @table customers
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (database) => {
  const tableName = "customers";
  const Customer = database.define(
    "Customer",
    {
      gender_id: {
        type: Sequelize.INTEGER,
      },
      income_group_id: {
        type: Sequelize.INTEGER,
      },
      region_id: {
        type: Sequelize.INTEGER,
      },
      marital_status_id: {
        type: Sequelize.TINYINT,
      },
    },
    { tableName }
  );
  return Customer;
};
