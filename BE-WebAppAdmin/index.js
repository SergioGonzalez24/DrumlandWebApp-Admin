const express = require('express');
const sequelize = require('./util/database');
const adminPas = require('./models/adminPas');
const adminPasRouter = require('./routes/adminPas');
const cors = require('cors');

const app = express();

const ports = process.env.PORT || 3000;

app.use(express.json());
//Sirve para leer la información que envian los formularios
app.use(express.urlencoded({extended:true}))
//Comunicar dos aplicaciones una en back y otra en front
app.use(cors())

app.use('/adminPas', adminPasRouter);


app.listen(ports, () => console.log(`Listening on port ${ports}`));