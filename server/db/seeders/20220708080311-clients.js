module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        check_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
