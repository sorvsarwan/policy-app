/**
 * Model Associations
 * @desc This file is used to define the model associations
 * @author [Sourabh Sarwan]
 */

const applyModelAssociations = (database) => {
  const {
    Customer,
    Policy,
    Vehicle,
    Gender,
    Region,
    IncomeGroup,
    VehicleSegment,
    Fuel
  } = database.models;
  Policy.belongsTo(Customer, { foreignKey: "customer_id" });
  Policy.belongsTo(Vehicle, { foreignKey: "vehicle_id" });

  Customer.belongsTo(Gender, { foreignKey: "gender_id" });
  Customer.belongsTo(Region, { foreignKey: "region_id" });
  Customer.belongsTo(IncomeGroup, { foreignKey: "income_group_id" });
  
  Vehicle.belongsTo(VehicleSegment, { foreignKey: "segment_id" });
  Vehicle.belongsTo(Fuel, { foreignKey: "fuel_id" });
};

module.exports = { applyModelAssociations };
