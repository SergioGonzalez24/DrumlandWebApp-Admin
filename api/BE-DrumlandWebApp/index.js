const sequelize = require("./util/database");
const Admin = require("./models/adminPas");
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require("./routes/adminPas")
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');


app.use('/admin',adminRoutes);


sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.log('Unable to connect to the database:', err);
});
