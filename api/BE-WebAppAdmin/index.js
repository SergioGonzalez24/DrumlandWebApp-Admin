const path = require('path'); 
const bodyParser = require('body-parser');
const express = require('express');
const sequelize = require("./util/database");
const adminPas = require('./models/adminPas');
const adminPasRouts = require('./routes/adminPas');
const app = express();



sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.log('Unable to connect to the database:', err);
});