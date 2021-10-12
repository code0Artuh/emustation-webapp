const Sequelize = require('sequelize');
const sequelize = new Sequelize('games-project', 'postgres', '82758135', {
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = sequelize;