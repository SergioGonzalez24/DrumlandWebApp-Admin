const Sequelize = require('sequelize');

const sequelize = new Sequelize('drumland','sergiomaster','Bke6X}H^UDz5e,Hf',{
    host: 'drumland.database.windows.net',
    port: '1433',
    dialect: 'mssql',
    dialectOptions:{
        options:{
            useUTC: false,
            dateFirst: 1
        }
    },
    define:{
        //Evitar que nos ponga createdAT y updatedAt
        timestamps: false,
        //Evitar que agregue una s al final
        freezeTableName: true
    }
});

module.exports = sequelize;