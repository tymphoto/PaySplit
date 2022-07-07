const Bcrypt = require('../../utils/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Пиво',
        price: '400',
        img: 'https://pivo.by/images/2018/06/beer-belly.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Водка',
        price: '900',
        img: 'https://vzboltay.com/uploads/posts/2019-06/1559743837_smirnoff-vodka-retina.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гренки',
        price: '300',
        img: 'https://www.burgermeister.ru/images/docs//Image/oil_croutons-xxl.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бургер',
        price: '350',
        img: 'https://s1.eda.ru/StaticContent/Photos/121124234750/131219150003/p_O.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Шаурма',
        price: '200',
        img: 'https://rest-f.ru/upload/iblock/4ca/4ca1d16179d9e37e727116293620f3f5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Салат Цезарь',
        price: '450',
        img: 'https://cdn.vkuso.ru/uploads/domashnij-salat-cezar-s-klassicheskim-sousom.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Оливье',
        price: '500',
        img: 'https://zira.uz/wp-content/uploads/2018/04/olivye-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Крабовый салат',
        price: '437',
        img: 'https://img.delo-vcusa.ru/2017/07/Salat-iz-krabovyh-palochek-c-risom-yajtsami-i-kukuruzoj.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Картофель жареный',
        price: '369',
        img: 'https://alimero.ru/uploads/images/18/76/55/2019/10/17/d68aac.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Харчо',
        price: '189,99',
        img: 'https://static.1000.menu/img/content/21331/-xarcho-iz-govyadiny-xarcho-iz-govyadiny-s-greckimi-orexami_1499954296_1_max.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'bla',
        email: 'bla@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vova',
        email: 'vova@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marat',
        email: 'marat@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Albert',
        email: 'albert@mail.ru',
        password: await Bcrypt.hash('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
