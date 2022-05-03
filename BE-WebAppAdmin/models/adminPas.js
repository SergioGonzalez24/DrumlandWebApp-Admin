const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const adminPas = sequelize.define('adminPas',{
    //Atributos de mi tabla
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    passwordUser: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = adminPas;
