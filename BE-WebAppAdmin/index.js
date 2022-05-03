const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const adminPasRouter = require('./routes/adminPas');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/adminPas', adminPasRouter);


sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))

console.log(adminPasRouter.login);