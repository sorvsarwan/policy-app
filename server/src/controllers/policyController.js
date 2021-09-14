/**
 * Policy Controller
 * @desc This controller is used to manage policy related tasks
 * @endpoint /policy
 * @author [Sourabh Sarwan]
 */

const httpStatus = require("http-status");
const policyService = require("../services/policy");
const { createFailResponse, createSuccessResponse } = require("../utils/api");

/**
 * Search policies
 * @desc It is used to search policy by customer Id and policy Id
 * @endpoint /policy/search
 * @param {Request, Response}
 * @returns {Response}
 */

const search = async (req, res) => {
  try {
    const result = await policyService.searchPolicies(req.body);
    return createSuccessResponse(res, httpStatus.OK, result);
  } catch (error) {
    return createFailResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

/**
 * Get policy Details
 * @desc It is used to get policy details by policy Id
 * @endpoint /policy/details/:id
 * @param {Request, Response}
 * @returns {Response}
 */

const getPolicyDetails = async (req, res) => {
  try {
    const { id } = req.params;
    let result = {};
    const policyDetails = await policyService.getPolicyDetails(id);
    if (policyDetails) result = policyDetails;
    return createSuccessResponse(res, httpStatus.OK, result);
  } catch (error) {
    return createFailResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

/**
 * Update policy Details
 * @desc It is used to update policy details by policy Id
 * @endpoint /policy/update/:id
 * @param {Request, Response}
 * @returns {Response}
 */

const updatePolicyDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await policyService.updatePolicyDetails(id, req.body);
    return createSuccessResponse(res, httpStatus.OK, { status: !!status });
  } catch (error) {
    return createFailResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

/**
 * Get policy report data
 * @desc It is used to update policy details by policy Id
 * @endpoint /policy/report/month
 * @param {Request, Response}
 * @returns {Response}
 */
const getPolicyReportData = async (req, res) => {
  try {
    const { region } = req.query;
    const result = await policyService.getPolicyMonthlyData(region);
    return createSuccessResponse(res, httpStatus.OK, result);
  } catch (error) {
    console.log("ERROR", error);
    return createFailResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

module.exports = {
  search,
  getPolicyDetails,
  updatePolicyDetails,
  getPolicyReportData
};
