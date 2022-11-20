const express = require('express');
const { createCourse, getAllCourses, getCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/course', createCourse);
router.get('/courses', getAllCourses);
router.get('/course/:id', getCourse);

module.exports = {
    routes: router
}