const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host:  process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
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