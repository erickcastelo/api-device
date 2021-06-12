const express = require('express');
const CategoryController = require('./controllers/CategoryController');
const DeviceController = require('./controllers/DeviceController');
const CategoryValidation = require('./validations/CategoryValidation');
const DeviceValidation = require('./validations/DeviceValidation');

const routes = express.Router();

routes.options('/category');
routes.get('/category', CategoryController.get);
routes.post('/category', CategoryValidation.create, CategoryController.create);
routes.delete('/category/:id', CategoryController.delete);

routes.options('/device'); 
routes.get('/device', DeviceController.get);
routes.post('/device', DeviceValidation.create, DeviceController.create);
routes.delete('/device/:id', DeviceController.delete);

module.exports = routes;
