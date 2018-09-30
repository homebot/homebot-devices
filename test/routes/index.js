const express = require('express');

// const users = require('../modules/users/routes');
const devices = require('../../src/routes');

// const response = require('../helpers/response');

const routes  = express.Router();
// routes.use(response.setHeadersForCORS);

// TODO 
// routes.use('/api/auth', auth);
// routes.use('/users', users);
routes.use('/devices', devices);
//routes.use('/api/alisa', alisa);

routes.use(function(req, res) {
  response.sendNotFound(res);
});

module.exports = routes;
