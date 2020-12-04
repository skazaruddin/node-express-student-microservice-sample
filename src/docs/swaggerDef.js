const { version } = require('../../package.json');


const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Node Express Student Microservice Sample API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/skazaruddin/node-express-student-microservice-sample/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:8080/api/v1`,
    },
  ],
};

module.exports = swaggerDef;
