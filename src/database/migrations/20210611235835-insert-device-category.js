'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', [
      {
        name: 'AddDevice',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Broadcom97420',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Device Profile Proposal',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'N9',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Shiner',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'TIBeagleBoard',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};
