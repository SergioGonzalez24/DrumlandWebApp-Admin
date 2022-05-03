const express = require('express');

const sequelize = require('./util/database');
const adminPasRoutes = require('./routes/adminPas');

const app = express();
app.use(express.json());
//Sirve para leer la información que envian los formularios
app.use(express.urlencoded({extended:true}))
//Comunicar dos aplicaciones una en back y otra en front
app.use(cors())

app.use('/adminPas',adminPasRoutes);



sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.log('Unable to connect to the database:', err);
});