const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Checks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Clients }) {
      // define association here
      this.belongsTo(Users, { foreignKey: 'user_id' });
      this.belongsTo(Clients, { foreignKey: 'client_id' });
    }
  }
  Checks.init({
    user_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Checks',
  });
  return Checks;
};
