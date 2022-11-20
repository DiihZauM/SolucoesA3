const express = require('express');
const { createModule, getAllModules } = require('../controllers/moduleController');

const router = express.Router();

router.post('/modules', createModule);
router.get('/modules/:id', getAllModules);

module.exports = {
    routes: router
}