const admin = require('../models/adminPas');
const path = require('path');


exports.getUsuarios = (req,res) => {
    admin.findAll().then(usuarios => {
        res.sendFile(path.join(__dirname,"../FE-DrumlandWebApp/src/index.html"));
    });
};