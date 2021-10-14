const { Sequelize, DataType } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect:  'postgres',
  protocol: 'postgres',
  logging:  true ,
  sslmode: process.env.NODE_ENV === "production" ? "require" : "disable"
});

async function conectado(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize, conectado};