const { body } = require('express-validator');

module.exports.create = [
  body('name')
    .notEmpty().withMessage('The name field is required')
    .isLength({max: 128}).withMessage('The name field must have a maximum of 128 characters')
];