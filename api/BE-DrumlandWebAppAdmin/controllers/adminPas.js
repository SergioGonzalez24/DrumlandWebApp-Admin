const adminPas = require('../models/adminPas');



exports.getUsers = (req, res) => {
    adminPas.findAll()
        .then(username=>{
            console.log("adminPas: ", adminPas);
        })
}