const Sequelize = require('sequelize');

const User = require('../app/models/User')

/* 
  Connection Database

*/

const connectionDatabase = require('../config/database')
const connection = new Sequelize(connectionDatabase);

User.init(connection)

module.exports = connection