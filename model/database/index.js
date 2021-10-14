const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  host:  process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = sequelize;