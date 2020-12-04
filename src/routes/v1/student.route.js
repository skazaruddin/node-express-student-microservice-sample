const express = require('express');
const validate = require('../../middlewares/validate');
const studentValidation = require('../../validations/student.validation');
const studentController = require('../../controllers/student.controller');

const router = express.Router();

router.get("/" , validate(studentValidation.getStudents), studentController.getStudentsHandler);

router.get("/:studentId" , validate(studentValidation.getStudent), studentController.getStudentsHandler);

router.post("/", validate(studentValidation.createStudent), studentController.createStudentHandler)

router.put("/:studentId", validate(studentValidation.updateStudent), studentController.updateStudentHandler)

router.delete("/:studentId", validate(studentValidation.deleteStudent), studentController.deleteStudentHandler)

module.exports = router;