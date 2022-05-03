const adminPas = require('../models/adminPas');

exports.login = async(req,res )=>{
    const username = req.body.username;
    const password = req.body.password;

    const adminPas = await sequelize.query("SELECT * FROM adminPas WHERE Username = :username AND passwordUser = :password",
    {replacements: {username: username, password: password}, type: sequelize.QueryTypes.SELECT
    }
    );
    
    console.log(adminPas);
    if (user.valueOf() == 0){
        res.json({
            message: "Usuario o contraseña incorrecta"
        })
    }
    else{
        res.json({
            message: "Usuario correcto"
        })
        res.redirect('/dashboard');
    }
}



