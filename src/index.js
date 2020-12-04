const mongoose = require('mongoose');
const app = require('./app');

let server;

const  config  = {
  port: 8080,
  mongoose: {
    url: "mongodb://127.0.0.1:27017/studentdb",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }
}

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
