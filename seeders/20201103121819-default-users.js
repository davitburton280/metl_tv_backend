'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async (queryInterface) => {


        return queryInterface.bulkInsert('users', [
            {
                full_name: 'John Doe',
                birthday: '1986-03-30',
                gender: 'male',
                email: 'admin@gmail.com',
                password: bcrypt.hashSync('12345678', 10),
                stocks_order_type_id: 1,
                username: 'admin',
                avatar: '',
                cover: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                full_name: 'Test User',
                birthday: new Date(),
                gender: 'female',
                email: 'test@gmail.com',
                stocks_order_type_id: 1,
                username: 'test',
                password: bcrypt.hashSync('12345678', 10),
                avatar: '',
                cover: '',
                created_at: new Date(),
                updated_at: new Date()
            }
        ])
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
