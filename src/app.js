const express = require('express');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes/v1/routes');
const docsRoute = require('./routes/v1/docs.route');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');

const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const app = express();

// parse json request body
app.use(express.json());

app.use(xss());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// To remove data, use:
app.use(mongoSanitize());


// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());


// v1 api routes
app.use('/api/v1', routes);


app.use('/swagger/docs', docsRoute);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
