const sequelize = require("./util/database");
const Admin = require("./models/adminPas");



sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.log('Unable to connect to the database:', err);
});
