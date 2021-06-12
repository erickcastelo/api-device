const Category = require('../models/Category');

module.exports = {
  async getAll() {
    return await Category.findAll({
      order: [
        ['id', 'DESC']
      ]
    });
  },
  
  async getById(categoryId) {
    return await Category.findByPk(categoryId);
  },
  
  async create(data) {
    return await Category.create(data);
  },
}