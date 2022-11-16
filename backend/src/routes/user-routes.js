const express = require('express');
const { createUser, getAllUsers, getUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.post('/user', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);

module.exports = {
    routes: router
}