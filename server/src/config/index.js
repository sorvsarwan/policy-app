/**
 * Main Config
 * @desc This config is used to create config variables
 * that can use through out the app.
 * @author [Sourabh Sarwan]
 */

require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
};

module.exports = config;
