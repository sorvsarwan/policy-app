/**
 * Database Config
 * @desc This DB config is used to initalize the DB connection,
 * model and model associations.
 * @author [Sourabh Sarwan]
 */

const Sequelize = require('sequelize');

const {db} = require('./index');
const { applyModelAssociations } = require('./modelAssociations'); 

const database = new Sequelize(
  db.name,
  db.username,
  db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

const modelDefiners = [
  require('../models/Region'),
  require('../models/Gender'),
  require('../models/IncomeGroup'),
  require('../models/VehicleSegment'),
  require('../models/Fuel'),
  require('../models/Customer'),
  require('../models/Vehicle'),
  require('../models/Policy'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(database);
}

applyModelAssociations(database);

module.exports = database;
