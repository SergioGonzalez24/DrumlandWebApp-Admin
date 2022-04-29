const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const adminPas = sequelize.define('adminPas',{
    //Atributos de mi tabla
    username: {
        type: Sequelize.STRING,
        allowNull: true
    },
    passwordUser: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = adminPas;
