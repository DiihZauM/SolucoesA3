var express = require('express');
var route = express.Router();

var user_controller = require('../controllers/user_controller');

route.get('/teste', user_controller.test);

route.post('/create', user_controller.create);

module.exports = route;
