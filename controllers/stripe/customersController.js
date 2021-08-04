const db = require('../../models');
const UsersCards = db.users_cards;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const to = require('../../helpers/getPromiseResult');

exports.getCustomerCards = async (req, res) => {
    let {user_id} = req.query;
    let userCards = await UsersCards.findAll({
        where: {user_id},
        attributes: {exclude: ['id', 'created_at', 'updated_at']},
        raw: true,
        order: ['created_at']
    }) || [];

    if (userCards.length > 0) {
        const cards = await to(stripe.customers.listSources(
            userCards[0].stripe_customer_id,
            {object: 'card'}
        ), res);

        if (!res.headersSent) {
            let cs = cards?.data?.map(t1 => ({...t1, ...userCards.find(t2 => t2.card_id === t1.id)}));
            res.json(cs)
        }
    } else {
        res.json(userCards)
    }

}