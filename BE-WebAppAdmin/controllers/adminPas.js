const adminPas = require('../models/adminPas');





exports.getLogin = async(req,res )=>{
    const password = req.body.password;
    const username = req.body.username;

    if (username === 'admin' && password === 'admin') {
        res.redirect('/dashboard');
    }
    else {
        res.message = 'Invalid username or password';
    }


}
