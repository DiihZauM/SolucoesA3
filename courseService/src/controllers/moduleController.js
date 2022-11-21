'use strict';

const firebase = require('../../db');
const Module = require('../models/module_model');
const firestore = firebase.firestore();

const createModule = async (req, res) => {
    try {
        const data = req.body;
        await firestore.collection("modules").doc().set(data);
        res.send('Módulo cadastrado com sucesso!');
    } catch (err) {
        res.status(400).send(err.message);
    }
}
const getAllModules = async (req, res) => {
    try {
        const id = req.params.id
        const modules = await firestore.collection('modules').where('courseId' , '==', id);
        const data = await modules.get();
        if (data.empty) {
            res.status(404).send('Modulos não cadastrados');
        } else {
            const moduleArray = [];
            data.forEach(doc => {
                const course = new Module(
                    doc.data().courseId,
                    doc.data().moduleId,
                    doc.data().name,
                    doc.data().lessons
                );
                moduleArray.push(course);
            });
            res.send(moduleArray);
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    createModule,
    getAllModules
}