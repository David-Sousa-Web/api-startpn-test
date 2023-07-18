const express = require('express')
const routes = express.Router();

const ControllerUsers = require('./app/controllers/ControllerUsers');

routes.get('/users', ControllerUsers.get)
routes.post('/users', ControllerUsers.storage)

module.exports = routes