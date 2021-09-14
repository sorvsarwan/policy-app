/**
 * Gender Model
 * @desc This model is used to define genders table
 * @type Lookup table
 * @table genders
 * @author [Sourabh Sarwan]
 */

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const tableName = "genders";

  const Gender = sequelize.define(
    "Gender",
    {
      gender: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { tableName }
  );
  return Gender;
};

