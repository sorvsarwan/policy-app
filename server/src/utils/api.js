/**
 * API Utils
 * @desc This file is used to perform API related utilites task.
 * @author [Sourabh Sarwan]
 */


/**
 * Create Success Response
 * @desc It is used to return sucess response with given status code and msg.
 * @param {Response}
 * @param {Number} code
 * @param {String} message
 * @returns {Response}
 */
const createSuccessResponse = (response, code = 200, data = {}) => response.status(code).json({
  status: 'success',
  data,
});

/**
 * Create Fail Response
 * @desc It is used to return fail response with given status code and msg.
 * @param {Response}
 * @param {Number} code
 * @param {String} message
 * @returns {Response}
 */
const createFailResponse = (res, code = 400, message = 'Bad Request') => {
  res.status(code).json({
      status: 'fail',
      message,
  });
};

module.exports = {
  createSuccessResponse,
  createFailResponse
};
