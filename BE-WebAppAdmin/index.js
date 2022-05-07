const express = require('express');
const path = require('path'); 

const sequelize = require('./util/database');
const adminPasRouter = require('./routes/adminPas');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/adminPas', adminPasRouter);


sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(3000,()=>console.log("Servidor en línea en el puerto 3000"));
    })
    .catch(error=>console.log(error))

