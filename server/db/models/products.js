const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders }) {
      // define association here
      this.hasMany(Orders, { foreignKey: 'product_id' });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
