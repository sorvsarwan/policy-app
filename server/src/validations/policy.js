
/**
 * Joi Validation
 * @desc It is used to store schema for policy module endpoints.
 * @author [Sourabh Sarwan]
 */

const Joi = require("joi");

/**
 * Search policies Request Schema
 * @endpoint /search
 */
const search = Joi.object({
  term: Joi.string().required(),
  pageSize: Joi.number().required(),
  pageNumber: Joi.number().required(),
});

/**
 * Get policy Details Request Schema
 * @endpoint /details/:id
 */
const getPolicyDetails = Joi.object({
  id: Joi.number().required(),
});

/**
 * Update policy Details Request Schema
 * @endpoint /update/:id
 */
const updatePolicyDetails = Joi.object({
  id: Joi.number().required(),
  premium: Joi.number().min(1).max(1000000).required(),
});

/**
 * Update policy Details Request Schema
 * @endpoint /report/month
 */
 const getPolicyReportData = Joi.object({
  region: Joi.number().min(1).max(4),
});

module.exports = {
  search,
  getPolicyDetails,
  updatePolicyDetails,
  getPolicyReportData
};
