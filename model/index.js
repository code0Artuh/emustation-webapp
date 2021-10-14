const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const jogos = database.sequelize.define("jogos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    imagem:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cons:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = jogos;