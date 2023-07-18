const Sequelize = require('sequelize');
const dbConfig = require('../config/database')


/* 
  Connection Database

*/


const connectionDatabase = new Sequelize(dbConfig);

module.exports = connectionDatabase