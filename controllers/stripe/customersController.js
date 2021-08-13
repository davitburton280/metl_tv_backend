const db = require('../../models');
const UsersCards = db.users_cards;
const UsersCoins = db.users_coins;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const to = require('../../helpers/getPromiseResult');
const showIfErrors = require('../../helpers/showIfErrors');
const getCardData = require('../../helpers/generateCardData');
const getExpDate = require('../../helpers/generateCardExpiryDate');

const accountsController = require('./accountsController');


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

exports.getCardDetails = async (req, res) => {
    let {card_id} = req.query;
    let userCard = await UsersCards.findOne({where: {card_id}, raw: true});
    if (userCard?.stripe_customer_id) {
        const card = await stripe.customers.retrieveSource(
            userCard.stripe_customer_id,
            card_id
        );
        res.json({...card, ...userCard});
    } else {
        res.status(500).json({msg: 'The specified card isn\'t found in database'});
    }
};

exports.createCustomerCard = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        let {email} = data;
        let stripeUserFound = await to(UsersCards.findOne({where: {user_id: data.user_id}}));

        let customerFound = await to(stripe.customers.list({
            email
        }), res) || [];

        if (!stripeUserFound) {
            if (customerFound.data.length === 0) {
                let createdCustomer = await to(stripe.customers.create({email}));
                await this.createStripeCard(data, createdCustomer.id, req, res);
            } else {
                await this.createStripeCard(data, customerFound.data[0].id, req, res);
            }
        } else {

            let stripeCardFound = await UsersCards.findOne({where: getCardData(data)});

            if (stripeCardFound) {
                res.status(500).json({msg: 'A card with such details already exists'})
            } else {
                await this.createStripeCard(data, stripeUserFound.stripe_customer_id, req, res);
            }
        }
    }
}

exports.createStripeCard = async (data, customer_id, req, res) => {
    let {name, user_id} = data;

    // Retrieving card token and checking if card exists by fingerprint
    let token = await to(stripe.tokens.retrieve(
        data.stripeToken), res);

    let cardFingerprintFound = await UsersCards.findOne({where: {fingerprint: token.card.fingerprint}});
    if (cardFingerprintFound) {
        res.status(500).json({msg: 'The card fingerprint exists. Please use another card'});
    } else {
        let card = await to(stripe.customers.createSource(customer_id, {source: data.stripeToken}), res);

        let userCard = {
            card_id: card.id,
            brand: card.brand,
            country: card.country,
            expiry_date: getExpDate(data),
            holder_name: card.name,
            number_part: card.last4,
            fingerprint: card.fingerprint,
            stripe_customer_id: card.customer,
            user_id,
            name,
        };

        await to(UsersCards.create(userCard));
        req.query = data;

        await this.getCustomerCards(req, res);
    }
}

exports.setCardAsDefault = async (req, res) => {
    let {card_id, stripe_customer_id} = req.body;
    await to(stripe.customers.update(
        stripe_customer_id,
        {default_source: card_id}
    ), res)

    await to(UsersCards.update({is_primary: 0}, {where: {stripe_customer_id}}));
    await to(UsersCards.update({is_primary: 1}, {where: {card_id}}));
    req.query = req.body;
    await this.getCustomerCards(req, res);
};

exports.updateStripeCard = async (req, res) => {
    let {card_id, name} = req.body;
    await to(UsersCards.update({name}, {where: {card_id}}));
    res.json('OK');
};

exports.removeStripeCard = async (req, res) => {
    let data = req.query;

    let confirmation = await to(stripe.customers.deleteSource(
        data.stripe_customer_id,
        data.card_id,
    ));
    if (confirmation?.deleted) {
        await UsersCards.destroy({where: {user_id: data.user_id, card_id: data.card_id}});
        let userCards = await UsersCards.findAll({where: {user_id: data.user_id}});
        if (userCards.length === 0) {
            await this.removeCustomer(data);
            await accountsController.removeAccount(data);
            await UsersCoins.update({purchased: 0, received: 0}, {where: {user_id: data.user_id}})
        }
        await this.getCustomerCards(req, res);
    }

};

exports.removeCustomer = async (data) => {
    const deleted = await to(stripe.customers.del(
        data.stripe_customer_id
    ));

    return deleted;
};