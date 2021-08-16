const db = require('../../models');
const UsersCards = db.users_cards;
const UsersCoins = db.users_coins;
const Channel = db.channels;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);


const to = require('../../helpers/getPromiseResult');

exports.createTransfer = async (req, res) => {
    let data = req.body;

    console.log('CREATE TRANSFER !!!')

    // Create a PaymentIntent:
    const paymentIntent = await to(stripe.paymentIntents.create({
        amount: 100,
        currency: 'usd',
        payment_method_types: ['card'],
        payment_method: data.card_id,
        transfer_group: 'transfers',
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
        amount: 100,
        currency: 'usd',
        destination: data.to_account_id,
        transfer_group: 'transfers',
        description: data.description,
        metadata: {
            channel: channel.name
        }
    }));

    const accountBankAccounts = await to(stripe.accounts.listExternalAccounts(
        data.to_account_id,
        {}
    ));

    console.log("PAYOUT TO.....!!!!", accountBankAccounts.data.find(ba => ba.default_for_currency))

    const payout = await to(stripe.payouts.create({
        amount: 100,
        currency: 'usd',
        description: data.description + ' Payout',
        destination: accountBankAccounts.data.find(ba => ba.default_for_currency)?.id,
        metadata: {
            channel: channel.name
        },
        // source_type: 'bank_account',
        // method: 'instant'
    }, {
        stripeAccount: data.to_account_id,
    }));

    res.json(transfer)
};

exports.getAccountTransfers = async (req, res) => {
    let {stripe_account_id, ...created} = req.query;
    let transfers = [];
    if (stripe_account_id) {
        transfers = await to(stripe.transfers.list({
            destination: stripe_account_id,
            created
        }));
    }

    res.json(transfers?.data || []);
};


exports.createPaymentIntent = async (req, res) => {
    let data = req.body;
    let {customer_id, currency, purchase} = data;
    let coinWorth = 0.0199;
    let unitAmount = purchase.unit_amount / 100;
    let purchasedCoins = unitAmount / coinWorth;
    let purchasedWorth = ((unitAmount - (purchase.discount / 100 || 0) * unitAmount)).toFixed(6).slice(0, -4);
    const intent = await to(stripe.paymentIntents.create({
        amount: purchase.unit_amount,
        currency,
        customer: customer_id,
        description: `${purchase.name} Metl Coins Bundle`,
        metadata: {name: purchase.name, price: purchase.unit_amount}, // temporary unit_amount, maybe will be changed after currencies converter implemented
        transfer_group: 'purchases'
    }), res)

    let foundRecord = await UsersCoins.findOne({where: {user_id: data.user_id}});
    if (foundRecord) {

        await to(UsersCoins.increment('purchased', {by: purchasedCoins, where: {user_id: data.user_id}}));
        await to(UsersCoins.increment('purchased_worth', {by: purchasedWorth, where: {user_id: data.user_id}}));
    } else {
        let us = await UsersCoins.create({
            user_id: data.user_id,
            stripe_account_id: data.stripe_account_id,
            purchased: purchasedCoins,
            purchased_worth: purchasedWorth
        })
    }


    res.json(intent?.client_secret)
};

exports.createStripeCharge = async (req, res) => {
    let data = req.body;
    let {card, purchase, email} = req.body;
    // console.log('card', card)


    const charge = await stripe.charges.create({
        amount: purchase.unit_amount,
        currency: purchase.currency,
        source: card.id,
        customer: card.stripe_customer_id,
        description: `${purchase.name} Metl Coins Bundle`,
        metadata: {name: purchase.name},
        transfer_group: 'purchases'
    }).catch(e => {
        res.status(500).json({msg: e?.raw?.message})
    });

    res.json(charge);
};

exports.getAllPaymentsHistory = async (req, res) => {
    let {customer, user_id, ...created} = req.query;

    const paymentIntents = await stripe.paymentIntents.list({
        created,
        customer,
        limit: 20
    });

    let userCoins = await UsersCoins.findOne({
        where: {user_id: user_id},
        attributes: ['purchased', 'purchased_worth', 'received', 'received_worth']
    });
    res.json({payment_intents: paymentIntents.data, user_coins: userCoins})
};

exports.getPurchasesHistory = async (req, res) => {
    let {customer, ...created} = req.query;
    const charges = await to(stripe.charges.list({created, customer, transfer_group: 'purchases'}), res);
    res.json(charges.data)
};

exports.getAccountPayouts = async (req, res) => {
    let {stripe_account_id, ...created} = req.query;

    console.log(stripe_account_id)

    const accountBankAccounts = await to(stripe.accounts.listExternalAccounts(
        stripe_account_id,
        // {object: 'bank_account', limit: 1}
    ));

    // console.log("PAYOUTS", accountBankAccounts)
    const payouts = await stripe.payouts.list({
            destination: accountBankAccounts.data?.find(ba => ba.default_for_currency)?.id,
            created
        },
        {
            stripeAccount: stripe_account_id,
        });

    res.json(payouts.data);
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