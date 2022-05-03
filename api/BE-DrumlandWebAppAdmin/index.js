const express = require('express');
const sequelize = require('./util/database');
const adminPas = require('./models/adminPas');
const adminPasRouter = require('./routes/adminPas');
const cors = require('cors');

const app = express();

app.use(express.json());
//Sirve para leer la información que envian los formularios
app.use(express.urlencoded({extended:true}))
//Comunicar dos aplicaciones una en back y otra en front
app.use(cors())

app.use('/adminPas', adminPasRouter);


sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))