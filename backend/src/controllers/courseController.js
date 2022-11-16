'use strict';

const firebase = require('../../db');
const Course = require('../models/course_model');
const firestore = firebase.firestore();

const createCourse = async (req, res) => {
    try {
        const data = req.body;
        await firestore.collection("courses").doc().set(data);
        res.send('Curso cadastrado com sucesso!');
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getAllCourses = async (req, res) => {
    try {
        const courses = await firestore.collection('courses');
        const data = await courses.get();
        const courseArray = [];
        if (data.empty) {
            res.status(404).send('Cursos não cadastrados');
        } else {
            data.forEach(doc => {
                const course = new Course(
                    doc.id,
                    doc.data().title,
                    doc.data().author,
                    doc.data().description,
                    doc.data().specialization,
                    doc.data().image,
                    doc.data().avatarAuthor,
                );
                courseArray.push(course);
            });
            res.send(courseArray);
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}
const getCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await firestore.collection('courses').doc(id);
        const data = await course.get();
        if (!data.exists) {
            res.status(400).send('Curso com ID não encontrado');
        } else {
            res.send(data.data());
        }

    } catch (err) {
        res.status(400).send(err.message);
    }
}



module.exports = {
    createCourse,
    getAllCourses,
    getCourse
}