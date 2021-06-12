const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Category = require('../models/Category');
const Device = require('../models/Device');

const connection = new Sequelize(dbConfig);

Category.init(connection);
Device.init(connection);

Device.associate(connection.models);

module.exports = connection;
