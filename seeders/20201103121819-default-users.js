'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface) => {



    return queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        birthday: '1986-03-30',
        gender: 'male',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
        avatar: '',
        cover: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Test',
        last_name: 'Operator',
        birthday: new Date(),
        gender: 'female',
        email: 'test@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
        profile_img: '',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
