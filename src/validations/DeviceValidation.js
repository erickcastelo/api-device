const { body } = require('express-validator');

module.exports.create = [
  body('category_id')
    .notEmpty().withMessage('The Category field is required'),
  body('color')
    .notEmpty().withMessage('The Color field is required')
    .isLength({max: 16}).withMessage('The color field must have a maximum of 128 characters'),
  body('part_number')
    .notEmpty().withMessage('The Part Number field is required')
    .isInt().withMessage('The Part Number field must be an integer'),
];