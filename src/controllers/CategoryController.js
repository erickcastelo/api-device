const { validationResult } = require('express-validator');
const CategoryRepository = require('../repositories/CategoryRepository');

module.exports = {
  async get(req, res) {
    const categories = await CategoryRepository.getAll();
    return res.status(200).json(categories);
  },

  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const category = await CategoryRepository.create(req.body);

    return res.status(200).json({category});
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      let category = await CategoryRepository.getById(id);

      category.destroy().then(() => {
        res.status(200).json({
          message: 'Category deleted.'
        })
      });
    } catch (e) {
      res.status(500).json({
        message: 'Error deleting category'
      })
    }
  }
}
