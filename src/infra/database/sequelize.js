require('dotenv').config();

const { Sequelize } = require('sequelize-typescript');
const { RangesMapa } = require('../../ranges-mapa/models/ranges-mapa.model');
const { Casos } = require('../../casos/models/casos.model');
const { Vacinas } = require('../../vacina/models/vacina.model');
const config = require('./config');
const { Ubs } = require('../../ubs/models/ubs.model');

const sequelize = new Sequelize({
  ...config[process.env.NODE_ENV || 'development'],
  models: [Vacinas, Casos, RangesMapa, Ubs]
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

exports.sequelize = sequelize;
module.exports = db;