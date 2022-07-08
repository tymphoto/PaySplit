module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Checks', [
      {
        user_id: 1,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Checks', null, {});
  },
};
