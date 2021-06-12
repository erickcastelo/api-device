const Device = require('../models/Device');
const Category = require('../models/Category');

module.exports = {
  async getAll() {
    return await Device.findAll({
      order: [
        ['id', 'DESC']
      ]
    });
  },

  async getAllJoinCategory() {
    return await Device.findAll({
      include: [{
        model: Category,
        as: 'category',
        required: true,
      }],
      order: [
        ['id', 'DESC']
      ]
    });
  },

  async getById(categoryId) {
    return await Device.findByPk(categoryId);
  },

  async create(data) {
    return await Device.create(data);
  },
}