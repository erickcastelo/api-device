const { Model, DataTypes } = require('sequelize');

class Device extends Model {
  static init(sequelize) {
    super.init({
      category_id: DataTypes.INTEGER,
      color: DataTypes.STRING,
      part_number: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'device',
      freezeTableName: true
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category'})
  }
}

module.exports = Device;
