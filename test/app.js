const express = require('express');
const bodyParser  = require('body-parser');

const routes = require('./routes');

const config = require('config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(morgan('test'));

app.use('/api/v1', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;