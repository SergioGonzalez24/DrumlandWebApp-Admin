const Sequelize = require('sequelize');

const sequelize = new Sequelize('drumland','sergiomaster','Bke6X}H^UDz5e,Hf',{
    host: 'drumland.database.windows.net',
    port: '1433',
    dialect: 'mssql',
    
});

module.exports = sequelize;