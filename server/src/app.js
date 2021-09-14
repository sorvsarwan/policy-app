/**
 * App File
 * @desc It is used to initialise the express app and apply various middlewares.
 * @author [Sourabh Sarwan]
 */

const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { createFailResponse } = require("./utils/api");
const routes = require("./routes/v1");

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1/bcg-demo", routes);

// send back a 404 error for any unknown api request
app.use("*", (req, res, next) => {
  return createFailResponse(res, httpStatus.NOT_FOUND, "Not found");
});

module.exports = app;
