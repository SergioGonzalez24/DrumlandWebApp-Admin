const adminPas = require('../models/adminPas');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.getLogin = async(req,res )=>{

    const username = req.body.username;
    const password = req.body.password;

    const busqueda = await sequelize.query(
        'SELECT * FROM adminPas WHERE Username = (:username) AND passwordUser = (:password)',
    {
        replacements: {
            username: [username],
            password: [password]
        },
        type: Sequelize.QueryTypes.SELECT

    });

    if(busqueda.length > 0){
        res.send('Login correcto');
    }
    else{
        res.send('Login incorrecto');
    }
}
