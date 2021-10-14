const { Sequelize } = require("sequelize");
const connectionString = 'postgres://lubqxysawbdpsj:cc5cb4e46a141af9618437eb8bbcfff3f6877f8643223596989d29cbfc0baf18@ec2-18-215-96-54.compute-1.amazonaws.com:5432/d59sl9b4pa23uj';


const sequelize = new Sequelize({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  },
  dialect: "postgres"
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