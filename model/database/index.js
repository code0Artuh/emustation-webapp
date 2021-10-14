const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({connectionString: process.env.DATABASE_URL,
  
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