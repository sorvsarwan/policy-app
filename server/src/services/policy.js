/**
 * Policy Services
 * @desc All polices related services
 * @author [Sourabh Sarwan]
 */

const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../config/database");

/**
 * Search policies
 * @param {String} term
 * @returns {Promise<Policy>}
 */
const searchPolicies = async ({ term, pageSize, pageNumber }) => {
  const {
    Customer,
    Policy,
    Vehicle,
    Gender,
    Region,
    IncomeGroup,
    VehicleSegment,
    Fuel,
  } = database.models;
  return Policy.findAndCountAll({
    limit: pageSize,
    offset: pageSize * pageNumber,
    attributes: [
      "id",
      "date_of_purchase",
      "premium",
      "bodily_injury_liability",
      "personal_injury_protection",
      "property_damage_liability",
      "collision",
      "comprehensive",
      "customer_id",
      "vehicle_id",
    ],
    include: [
      {
        model: Customer,
        attributes: ["id"],
        include: [
          { model: Gender, attributes: ["gender"] },
          { model: Region, attributes: ["region"] },
          { model: IncomeGroup, attributes: ["group"] },
        ],
      },
      {
        model: Vehicle,
        attributes: ["id"],
        include: [
          { model: VehicleSegment, attributes: ["segment"] },
          { model: Fuel, attributes: ["fuel"] },
        ],
      },
    ],
    where: {
      [Op.or]: [
        {
          id: term,
        },
        {
          customer_id: term,
        },
      ],
    },
  });
};

/**
 * Get policy Details
 * @param {Integer} id
 * @returns {Promise<Policy>}
 */
const getPolicyDetails = async (id) => {
  const { Policy } = database.models;
  return Policy.findOne({ where: { id } });
};

/**
 * Update policy Details
 * @param {Integer} id
 * @param {Object} body
 * @returns {Promise<Policy>}
 */
const updatePolicyDetails = async (id, body) => {
  const { Policy } = database.models;
  return Policy.update({ premium: body.premium }, { where: { id } });
};

/**
 * Get policy monthly data
 * @param {Integer} id
 * @param {Object} body
 * @returns {Promise<Policy>}
 */
const getPolicyMonthlyData = async (region = "") => {
  const { Policy, Customer, Region } = database.models;

  return Policy.findAll({
    attributes: [
      [Sequelize.fn("month", Sequelize.col("date_of_purchase")), "month"],
      [Sequelize.fn("COUNT", "id"), "count"],
    ],
    ...(region !== "" && {
      include: [
        {
          model: Customer,
          attributes: [],
          where: { region_id: region}
        },
      ],
    }),
    group: [Sequelize.fn("month", Sequelize.col("date_of_purchase"))],
  });
};

module.exports = {
  searchPolicies,
  getPolicyDetails,
  updatePolicyDetails,
  getPolicyMonthlyData,
};
