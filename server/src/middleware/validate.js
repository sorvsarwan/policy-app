/**
 * Validate Middleware
 * @desc This middleware is used to validate each request with Joi validations
 * @author [Sourabh Sarwan]
 */

const httpStatus = require("http-status");
const { createFailResponse } = require("../utils/api");

/**
 * Validate
 * @desc It is used to perform Joi validate on upcoming request with passed schema
 * @param {Object} schema
 * @returns {next}
 */

const validate = (schema) => (req, res, next) => {
  const { body, params, query } = req;
  const reqData = { ...body, ...params, ...query };
  const { error } = schema.validate(reqData);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return createFailResponse(res, httpStatus.BAD_REQUEST, errorMessage);
  }

  return next();
};

module.exports = validate;
