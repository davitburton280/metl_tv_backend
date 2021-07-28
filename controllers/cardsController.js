const db = require('../models');
const UsersCards = db.users_cards;
const Channel = db.channels;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const showIfErrors = require('../helpers/showIfErrors');
const moment = require('moment');
const usersController = require('../controllers/usersController');
const to = require('../helpers/getPromiseResult');

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
                    // console.log(userCards)
                    let cs = cards.data.map(t1 => ({...t1, ...userCards.find(t2 => t2.card_id === t1.id)}));
                    console.log(cs)
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
        });

        // If customer not found
        if (!stripeUserFound) {

            if (customerFound.data.length === 0) {
                let customer = await stripe.customers
                    .create({
                        email: data.stripeEmail,
                        // source: req.body.stripeToken,
                    });
                req.body.email = req.body.stripeEmail;
                req.body.ret = true;
                // let acc = await usersController.createStripeAccount(req, res);
                // data.stripe_account_id = acc.id;
                // console.log("STRIPE ACCOUNT !!!", acc.external_accounts.data)
                //
                // if (acc.id) {
                    await this.createStripeCard(data, customer.id, req, res);
                // } else {
                //     res.status(500).json({msg: 'Account is not created'})
                // }
            } else {
                let customer = await stripe.customers
                    .list(
                        {email: data.stripeEmail}
                        // source: req.body.stripeToken,
                    );
                // console.log(customer)
                await this.createStripeCard(data, customer?.data[0]?.id, req, res);
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
                await this.createStripeCard(data, stripeUserFound.stripe_customer_id, req, res);
            }

        }
    }


};

exports.createStripeCard = async (data, customer_id, req, res) => {

    await stripe.tokens.retrieve(
        data.stripeToken,
        async (err, token) => {
            let cardFingerprintFound = await UsersCards.findOne({where: {fingerprint: token.card.fingerprint}});
            if (cardFingerprintFound) {
                res.status(500).json({msg: 'The card fingerprint exists. Please use another card'});
            } else {


                stripe.customers.createSource(
                    customer_id,
                    {source: data.stripeToken}).then(async (d) => {
                    // console.log(d)
                    let userCard = {
                        card_id: d.id,
                        user_id: data.user_id,
                        brand: d.brand,
                        country: d.country,
                        stripe_customer_id: d.customer,
                        stripe_account_id: data.stripe_account_id,
                        expiry_date: moment(d.exp_month + '/' + d.exp_year, 'MM/YYYY').format('MM/YYYY'),
                        holder_name: d.name,
                        number_part: d.last4,
                        name: data.name,
                        fingerprint: d.fingerprint
                    };

                    await UsersCards.create(userCard);
                    req.query = data;

                    await this.getCustomerCards(req, res, true, token);
                    // await usersController.changeJwt({id: data.user_id}, res);
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
    console.log(data)

    await stripe.customers.deleteSource(
        data.stripe_customer_id,
        data.card_id,
        async (err, confirmation) => {
            if (confirmation?.deleted) {
                await UsersCards.destroy({where: {user_id: data.user_id, card_id: data.card_id}});
                let userCards = await UsersCards.findAll({where: {user_id: data.user_id}});
                if (userCards.length === 0) {
                    await this.removeCustomer(data);
                    await this.removeAccount(data);
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
};

exports.removeCustomer = async (data) => {
    console.log("STRIPE CUSTOMER ID:" + data.stripe_customer_id)
    const deleted = await to(stripe.customers.del(
        data.stripe_customer_id
    ));
    return deleted;
};

exports.removePaymentsFromHistory = async (data) => {
    await to(stripe.charges.del(data.stripe_customer_id));
    await to(stripe.transfers.del(data.stripe_customer_id));
    await to(stripe.payouts.del(data.stripe_customer_id));
};

exports.removeAccount = async (data) => {
    console.log("STRIPE ACCOUNT ID:" + data.stripe_account_id)
    let deleted = false;
    if (data.stripe_account_id) {

        deleted = await stripe.accounts.del(
            data.stripe_account_id
        );
    }
    return deleted;
};

exports.createTransfer = async (req, res) => {
    let data = req.body;
    console.log(data)

    // Create a PaymentIntent:
    const paymentIntent = await to(stripe.paymentIntents.create({
        amount: 100,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method: data.card_id,
        transfer_group: '{ORDER10}',
        customer: data.stripe_customer_id,
        confirm: true
    }));

    let user = await to(UsersCards.findOne({
        where: {stripe_customer_id: data.stripe_customer_id},
        attributes: ['user_id']
    }));
    let channel = await to(Channel.findOne({where: {user_id: user?.user_id}, attributes: ['id', 'name']}));


    // Create a Transfer to the connected account (later):
    const transfer = await to(stripe.transfers.create({
        amount: 10,
        currency: 'usd',
        destination: data.to_account_id,
        transfer_group: '{ORDER10}',
        description: data.description,
        metadata: {
            channel: channel.name
        }
    }));

    const accountBankAccounts = await to(stripe.accounts.listExternalAccounts(
        data.to_account_id,
        {object: 'bank_account', limit: 1}
    ));

    console.log("PAYOUT TO.....!!!!" + accountBankAccounts?.data?.[0]?.id)

    const payout = await to(stripe.payouts.create({
        amount: 10,
        currency: 'usd',
        description: data.description + ' Payout',
        destination: accountBankAccounts?.data?.[0]?.id,
        metadata: {
            channel: channel.name
        },
        // source_type: 'bank_account',
        // method: 'instant'
    }, {
        stripeAccount: data.to_account_id,
    }));

    console.log(payout)

    res.json(transfer)
};

exports.getAccountTransfers = async (req, res) => {
    let {stripe_account_id, ...created} = req.query;
    const transfers = await to(stripe.transfers.list({
        destination: stripe_account_id,
        created
    }));

    console.log("TRANSFERS" + transfers.data)
    res.json(transfers.data || []);
};

exports.createTopup = async (req, res) => {
    const topup = await stripe.topups.create({
        amount: 200000,
        currency: 'usd',
        description: 'Top-up for week of May 31',
        statement_descriptor: 'Weekly top-up',
    });

    res.json(topup);
};
