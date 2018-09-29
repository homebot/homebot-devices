import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'RESTful API with Swagger',
  },
  host: 'localhost:9000',
  basePath: '/api/v1',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [
    path.join(__dirname, '/../modules/alisa/routes/*.js'),
    path.join(__dirname, '/../modules/users/routes/*.js'),
    path.join(__dirname, '/../modules/devices/routes/*.js')
  ]
};

// initialize swagger-jsdoc

exports.spec = swaggerJSDoc(options);