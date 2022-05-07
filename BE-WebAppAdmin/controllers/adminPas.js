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
        
        //res.json(busqueda);
        res.json(200 , { message: 'Login correcto' });
        //res.json(window.location.href='https://lemon-desert-09c7b290f.1.azurestaticapps.net/dashboard');
    }
    else{
        //res.json(console.error());
        res.json(404 , { message: 'Login incorrecto' });
    }
}
