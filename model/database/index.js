const Sequelize = require('sequelize');
const sequelize = new Sequelize('d59sl9b4pa23uj', 'lubqxysawbdpsj', 'cc5cb4e46a141af9618437eb8bbcfff3f6877f8643223596989d29cbfc0baf18', {
    dialect: 'postgres',
    host: 'ec2-18-215-96-54.compute-1.amazonaws.com',
    port: 5432
});

module.exports = sequelize;