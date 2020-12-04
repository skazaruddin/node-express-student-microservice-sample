# RESTful API Node Student Microservice 

A quick starter example of Node Microservice build using RESTful APIs using Node.js, Express, and Mongoose.

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/skazaruddin/node-express-student-microservice-sample.git
cd node-express-student-microservice-sample
```

Install the dependencies:

```bash
npm install
```

### Commands

Running locally:

```bash
npm start
```


## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--docs\           # Swagger files
 |--app.js          # Express app
 |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080/swagger/docs/` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:


**Student API **:\
`GET  	/api/v1/student` - get all students\
`GET  	/api/v1/student/{:studentId}` - find a student\
`POST 	/api//v1/student` - create a student\
`PUT  	/api/v1/student/{:studentId}` - update student\
`DELETE /api/v1/student/{:studentId}` - delete student


## License

[MIT](LICENSE)
