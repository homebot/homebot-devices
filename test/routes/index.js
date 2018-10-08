const express = require('express');
const devices = require('../../src/routes');

const routes = express.Router();

routes.use('/devices', devices);

routes.use(function (req, res) {
  response.sendNotFound(res);
});

module.exports = routes;