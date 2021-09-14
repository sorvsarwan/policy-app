/**
 * Policy Routes
 * @desc This routes file is used to define policy modules routes.
 * @endpoint /policy
 * @author [Sourabh Sarwan]
 */

const express = require("express");
const validate = require("../../middleware/validate");
const {
  search,
  getPolicyDetails,
  updatePolicyDetails,
  getPolicyReportData,
} = require("../../validations/policy");
const policyController = require("../../controllers/policyController");

const router = express.Router();

/**
 * Search policies
 * @desc It is used to search policy by customer Id and policy Id
 */
router.post("/search", validate(search), policyController.search);

/**
 * Get policy Details
 * @desc It is used to search policy by customer Id and policy Id
 */
router.get(
  "/details/:id",
  validate(getPolicyDetails),
  policyController.getPolicyDetails
);

/**
 * Update policy Details
 * @desc It is used to update policy details by policy Id
 */
router.patch(
  "/update/:id",
  validate(updatePolicyDetails),
  policyController.updatePolicyDetails
);

/**
 * Get policy report
 * @desc It is used to get policy data to create the reports
 */
 router.get(
  "/report/month",
  validate(getPolicyReportData),
  policyController.getPolicyReportData
);

module.exports = router;
