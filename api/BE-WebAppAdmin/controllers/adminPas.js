const AdminPass = require('../models/adminPass');
const path = require("path");

exports.getRegistros = (req,res)=>{
    //SELECT * FROM usuario
    Usuario.findAll()
        AdminPas.then(registros=>{
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues)
            })
            console.log(data);
        })
        AdminPass.catch(error=>console.log(error))  
    
};


