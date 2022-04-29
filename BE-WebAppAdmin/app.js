const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('drumland.database.windows.net', 'sergiomaster', 'Bke6X}H^UDz5e,Hf', {
  host: 'http://drumland.database.windows.net',
  dialect: 'mssql'
});
const app = express();

sequelize.sync()
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))
