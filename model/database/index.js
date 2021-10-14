const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  dialect: "postgres",
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = sequelize;