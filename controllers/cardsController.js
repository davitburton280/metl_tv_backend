const db = require('../models');
const UsersCards = db.users_cards;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const showIfErrors = require('../helpers/showIfErrors');
const moment = require('moment');
const usersController = require('../controllers/usersController');

exports.getCustomerCards = async (req, res, getCount = false, token = null) => {
    let {user_id} = req.query;
    let userCards = await UsersCards.findOne({where: {user_id}});
    if (userCards) {
        await stripe.customers.listSources(
            userCards.toJSON().stripe_customer_id,
            {object: 'card'},
            async (err, cards) => {
                if (err) {
                    res.status(500).json({msg: err.raw.message});
                } else if (cards) {
                    console.log('here!!!')
                    let userCards = await UsersCards.findAll({
                        where: {user_id},
                        attributes: {exclude: ['id']},
                        raw: true,
                        order: ['created_at']
                    });
                    console.log(userCards)
                    console.log(cards)
                    let cs = cards.data.map(t1 => ({...t1, ...userCards.find(t2 => t2.card_id === t1.id)}));
                    if (!token) {
                        res.json(cs)
                    } else {
                        res.json({cards: cs, token: token})
                    }
                }
            }
        );
    } else {
        if (getCount) {
            if (token) {
                res.json({cards: [], token: token})
            } else {
                res.json([]);
            }
        } else {
            res.status(500).json({msg: 'This user doesn\'t have any cards registered in our system'});
        }
    }
};

exports.getCardDetails = async (req, res) => {
    let {card_id} = req.query;
    let userCards = await UsersCards.findOne({where: {card_id}});
    if (userCards?.stripe_customer_id) {
        const card = await stripe.customers.retrieveSource(
            userCards?.stripe_customer_id,
            card_id
        );
        res.json({...card, ...userCards?.toJSON()});
    } else {
        res.status(500).json({msg: 'The specified card isn\'t found in database'});
    }
};

exports.createStripeUserCard = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        let stripeUserFound = await UsersCards.findOne({where: {user_id: data.user_id}});
        console.log(stripeUserFound)
        let customerFound = await stripe.customers.list({
            email: data.stripeEmail
        })

        // If customer not found
        if (!stripeUserFound) {

            if (customerFound.data.length === 0) {
                let customer = await stripe.customers
                    .create({
                        email: data.stripeEmail,
                        // source: req.body.stripeToken,
                    });
                await this.createStripeCard(data, customer.id, res);
            } else {
                let customer = await stripe.customers
                    .list(
                        {email: data.stripeEmail}
                        // source: req.body.stripeToken,
                    );
                console.log(customer)
                await this.createStripeCard(data, customer?.data[0]?.id, res);
            }


            // If customer found
        } else {
            let card = {
                holder_name: data.holderName,
                number_part: data.last4,
                expiry_date: moment(data.exp_month + '/' + data.exp_year, 'MM/YYYY').format('MM/YYYY'),
                brand: data.brand,
                country: data.country
            };
            let stripeCardFound = await UsersCards.findOne({where: card});
            if (stripeCardFound) {
                res.status(500).json({msg: 'A card with such details already exists'})
            } else {
                await this.createStripeCard(data, stripeUserFound.stripe_customer_id, res);
            }

        }
    }


};

exports.createStripeCard = async (data, customer_id, res) => {

    await stripe.tokens.retrieve(
        data.stripeToken,
        async (err, token) => {
            let cardFingerprintFound = await UsersCards.findOne({where: {fingerprint: token.card.fingerprint}});
            if (cardFingerprintFound) {
                res.status(500).json({msg: 'The card fingerprint exists. Please use another card'});
            } else {

                const intent = await stripe.paymentIntents.create({
                    amount: 1099,
                    currency: 'gbp',
                    customer: customer_id,
                });


                console.log(data.stripeToken,)
                stripe.customers.createSource(
                    customer_id,
                    {source: data.stripeToken}).then(async (d) => {
                    console.log(d)
                    let userCard = {
                        card_id: d.id,
                        user_id: data.user_id,
                        brand: d.brand,
                        country: d.country,
                        stripe_customer_id: d.customer,
                        expiry_date: moment(d.exp_month + '/' + d.exp_year, 'MM/YYYY').format('MM/YYYY'),
                        holder_name: d.name,
                        number_part: d.last4,
                        name: data.name,
                        fingerprint: d.fingerprint
                    };

                    await UsersCards.create(userCard);
                    await usersController.changeJwt({id: data.user_id}, res);
                }).catch(err => {
                    console.log(err)
                    res.status(500).json({msg: err?.raw?.message})
                });


            }
        }
    );


};

exports.removeStripeCard = async (req, res) => {
    let data = req.query;

    await stripe.customers.deleteSource(
        data.stripe_customer_id,
        data.card_id,
        async (err, confirmation) => {
            if (confirmation.deleted) {
                await UsersCards.destroy({where: {user_id: data.user_id, card_id: data.card_id}});
                let userCards = await UsersCards.findAll({where: {user_id: data.user_id}});
                if (userCards.length === 0) {
                    await this.removeCustomer(req, res);
                }
                let token = await usersController.changeJwt({id: data.user_id}, null, true);
                await this.getCustomerCards(req, res, true, token);
            }
        }
    );
};

exports.updateStripeCard = async (req, res) => {
    let {card_id, name} = req.body;
    console.log('update stripe card!!!')
    await UsersCards.update({name}, {where: {card_id}});
    res.json('OK');
    // await stripe.customers.updateSource(
    //     data.stripe_customer_id,
    //     data.card_id,
    //     {name: 'Jenny Rosen'},
    //     function (err, card) {
    //         // asynchronously called
    //     }
    // );
};

exports.setCardAsDefault = async (req, res) => {
    let {card_id, stripe_customer_id} = req.body;
    await stripe.customers.update(
        stripe_customer_id,
        {
            default_source: card_id
        }, async (err, customer) => {
            if (err) {
                res.status(500).json(err);
            } else {
                await UsersCards.update({is_primary: 0}, {where: {stripe_customer_id}});
                await UsersCards.update({is_primary: 1}, {where: {card_id}});
                req.query = req.body;
                await this.getCustomerCards(req, res);
            }
        }
    );
};

exports.getBalances = async (req, res) => {
    let txns = await stripe.customers.listBalanceTransactions(req.query.customer_id);
    res.json(txns)
}

exports.removeCustomer = async (req, res) => {
    const deleted = await stripe.customers.del(
        req.query.stripe_customer_id
    );
    return deleted;
};

exports.getTransactions = async (req, res) => {
    console.log('aaa')
    // const transactions = await stripe.issuing.transactions.list({
    //     limit: 3,
    // });
    res.json(transactions)
}