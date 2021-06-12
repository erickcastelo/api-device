const DeviceRepository = require('../repositories/DeviceRepository');
const { validationResult } = require('express-validator');

module.exports = {
  async get(req, res) {
    const devices = await DeviceRepository.getAllJoinCategory();
    console.log('ola')
    return res.status(200).json(devices);
  },

  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const category = await DeviceRepository.create(req.body);

    return res.status(200).json({category});
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      let device = await DeviceRepository.getById(id);

      device.destroy().then(() => {
        res.status(200).json({
          message: 'Device deleted.'
        })
      });
    } catch (e) {
      res.status(500).json({
        message: 'Error deleting device'
      })
    }
  }
}
