const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  dialect: "postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

sequelize.connect();

sequelize.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  sequelize.end();
});

module.exports = sequelize;