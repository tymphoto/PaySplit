module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Безалкогольные Напитки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алкогольные Напитки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пасты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Горячие Блюда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
