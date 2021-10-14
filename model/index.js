module.exports = (DataTypes , sequelize) => {
    const User = sequelize.define('user', {
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
    return User;
    };
