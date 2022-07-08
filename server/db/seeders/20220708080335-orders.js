module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        check_id: 1,
        product_id: 1,
        counter: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        check_id: 1,
        product_id: 2,
        counter: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        check_id: 1,
        product_id: 3,
        counter: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        check_id: 1,
        product_id: 4,
        counter: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
