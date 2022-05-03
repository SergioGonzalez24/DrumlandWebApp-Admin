const Sequelize = require('sequelize');
const config = require('../config/config.json');


const sequelize = new Sequelize(config.database,config.user,config.password,{
    host: config.host,
    port: config.port,
    dialect: config.dialect,
});

module.exports = sequelize;