'use strict';

const firebase = require('../../db');
const User = require('../models/user_model');
const firestore = firebase.firestore();

const createUser = async (req, res) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('Usuário cadastrado com sucesso!');
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();
        const userArray = [];
        if (data.empty) {
            res.status(404).send('Usuários não cadastrados');
        }
        else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().email,
                    doc.data().age,
                    doc.data().gender,
                    doc.data().crm,
                    doc.data().password,
                );
                userArray.push(user);
            });
            res.send(userArray);
        }
    } catch (err) {
        res.status(400).send(err.message);

    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if (!data.exists) {
            res.status(400).send('Usuário com ID não encontrado');
        }
        else {
            res.send(data.data());
        }
    } catch (err) {
        res.status(400).send(err.message);

    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('users').doc(id);
        await user.update(data);
        res.send('Usuário atualizado com sucesso');
    } catch (err) {
        res.status(400).send(err.message);

    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser
}