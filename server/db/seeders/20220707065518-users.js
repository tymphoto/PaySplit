const Bcrypt = require('../../utils/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'bla',
        email: 'bla@mail.ru',
        password: await Bcrypt.hash('123'),
        telephone: '+79999999999',
      },
      {
        name: 'Vova',
        email: 'vova@mail.ru',
        password: await Bcrypt.hash('123'),
        telephone: '+79999999998',
      },
      {
        name: 'Marat',
        email: 'marat@mail.ru',
        password: await Bcrypt.hash('123'),
        telephone: '+79999999997',
      },
      {
        name: 'Albert',
        email: 'albert@mail.ru',
        password: await Bcrypt.hash('123'),
        telephone: '+79999999996',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
