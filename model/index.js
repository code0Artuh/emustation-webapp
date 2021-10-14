module.exports = (DataTypes , sequelize) => {
    const jogos = sequelize.define('jogos', {
      id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      lastEmail: {
        type: DataTypes.TIME,
      }
    })
    return jogos;
    };
