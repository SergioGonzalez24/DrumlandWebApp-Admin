const admin = require("../util/database").models.admin;
const sequelize = require('../util/database');
const path = require('path');



exports.getUsuarios = (req,res)=>{
    console.log(admin.finAll());
};

