// import Model from "sequelize";
const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'category',
      freezeTableName: true
    })
  }
}

module.exports = Category;
