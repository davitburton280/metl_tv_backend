'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async (queryInterface) => {


        return queryInterface.bulkInsert('users', [
            {
                full_name: process.env.DEV_FULL_NAME,
                birthday: '1986-03-30',
                gender: 'male',
                email: process.env.DEV_EMAIL,
                password: bcrypt.hashSync(process.env.DEV_PASSWORD, 10),
                stocks_order_type_id: 1,
                username: process.env.DEV_USERNAME,
                avatar: '',
                cover: '',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                full_name: process.env.CLIENT_FULL_NAME,
                birthday: '1993-05-30',
                gender: 'male',
                email: process.env.CLIENT_EMAIL,
                stocks_order_type_id: 1,
                username: process.env.CLIENT_USERNAME,
                password: bcrypt.hashSync(process.env.CLIENT_PASSWORD, 10),
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
