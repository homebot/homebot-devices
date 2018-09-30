const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    urlSchema: 'http',
    host: 'localhost',
    port: 9001
  },
  database: {
    url: `mongodb://${host}/node-express-skeleton-test`,
    properties: {
      useNewUrlParser: true
    }
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  },
  mqtt:{
    host: 'm12.cloudmqtt.com',
    username: 'olcetaiv',
    password: 'wvBDfj4Qb8gH',
    port: 11010
  }
};
