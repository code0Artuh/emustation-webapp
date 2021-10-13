const Sequelize = require('sequelize');
const database = require('./database/index');

const jogos = database.define('jogos',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cons: {
        type: Sequelize.STRING,
        allowNull:false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull:false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull:false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull:false
    }},
    {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = jogos;