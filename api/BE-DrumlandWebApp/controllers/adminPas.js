const admin = require('../models/admin');
const path = require('path');


exports.getRegistros = (req,res)=>{
    //SELECT * FROM usuario
    admin.findAll()
        .then(registros=>{
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues)
            })
            console.log(data);
            
            res.render('ejemploEJS.html',{
                personas:data,
                sesion: "autorizada",
                fecha: 2021
            });
        })
        .catch(error=>console.log(error))  
    
};
