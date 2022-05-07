const adminPas = require('../models/adminPas');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.getLogin = async(req,res )=>{
    

    const username = 'admin';
    const password = 'admin';

    const busqueda = await sequelize.query(
        'SELECT * FROM adminPas WHERE Username = (:username) AND passwordUser = (:password)',
    {
        replacements: {
            username: [username],
            password: [password]
        },
        type: Sequelize.QueryTypes.SELECT

    });

    console.log(busqueda);

    if(busqueda.length > 0){
        
        //res.json(busqueda);
        //res.json(200 , { message: 'Login correcto' });
        res.redirect('/dashboard');
    }
    else{
        //res.json(console.error());
        res.json(200 , { message: 'Login incorrecto' });
    }
}
