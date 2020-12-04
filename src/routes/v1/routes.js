const express = require('express');

const studentApiRoute = require('./student.route');
const docsRoute = require('./docs.route');


const router = express.Router();

router.use('/student', studentApiRoute);



module.exports = router;
