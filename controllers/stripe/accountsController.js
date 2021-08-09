const db = require('../../models');
const UsersCards = db.users_cards;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);
const moment = require('moment');

const to = require('../../helpers/getPromiseResult');
const customersController = require('../../controllers/stripe/customersController');

exports.checkIfUserHasStripeAccount = async (req, res) => {
    let {user_id} = req.query;
    let userCards = await UsersCards.findAll({where: {user_id}});
    let stripeAccountId = userCards?.filter(uc => uc.stripe_account_id)[0]?.stripe_account_id;
    res.json(+!!stripeAccountId);
}

exports.createStripeAccount = async (req, res) => {
    let {email, ret, user_id, ...accountData} = req.body;
    console.log("CREATE STRIPE ACCOUNT" + email)
    // let acc = await to(stripe.accounts.create({
    //     type: "custom",
    //     business_type: "individual",
    //     country: "US",
    //     email,
    //     capabilities: {
    //         card_payments: {requested: true},
    //         transfers: {requested: true},
    //     },
    //     tos_acceptance: {
    //         ip: req.ip,
    //         date: moment().format('X')
    //     },
    //     individual: {
    //         address: {
    //             country: "US",
    //             city: "New York",
    //             state: "New York",
    //             line1: "13 Street",
    //             line2: "47 W",
    //             postal_code: "10001",
    //         },
    //         email,
    //         dob: {day: 30, month: 3, year: 1986},
    //         id_number: "000000000",
    //         first_name: "John",
    //         last_name: "Doe",
    //         phone: "000 000 0000"
    //     },
    //     business_profile: {
    //         mcc: '5734',
    //         url: "https://metl.tv/",
    //         // support_address: {
    //         //     city: "New York",
    //         //     country: "US",
    //         //     line1: "13 Street",
    //         //     line2: "47 W",
    //         //     postal_code: "10001",
    //         //     state: "New York"
    //         // }
    //     },
    // external_account: {
    //     object: 'bank_account',
    //     currency: 'USD',
    //     country: 'US',
    //     account_holder_type: 'individual',
    //     account_holder_name: "Jenny Rosen",
    //     routing_number: '110000000',
    //     account_number: '000123456789'
    //     // token: 'tok_1JDTf1KqYIKd5fEIm8QKJEtQ'
    // }
    // external_account: 'tok_visa_debit_transferSuccess',
    // {
    //     object: 'card',
    //     number: ['4242 4242 4242 4242'],
    //     exp_month: ['02'],
    //     exp_year: ['24'],
    //         currency: 'USD',
    //         country: 'US',
    //         account_holder_type: 'individual',
    //         account_holder_name: "Jenny Rosen",
    //
    //     // token: 'tok_1JDTf1KqYIKd5fEIm8QKJEtQ'
    // }

    // }));

    let userCards = await UsersCards.findAll({where: {user_id}});

    if (userCards) {
        let stripeAccountId = userCards.filter(uc => uc.stripe_account_id)[0]?.stripe_account_id;
        // If user already created Stripe account, just adding external account for him
        if (stripeAccountId) {
            const externalAccount = await to(stripe.accounts.createExternalAccount(
                stripeAccountId,
                {
                    external_account: req.body.external_account,
                }
            ));
            console.log('ACCOUNT ID', stripeAccountId)
            res.json(externalAccount)
        } else {
            let acc = await to(stripe.accounts.create({
                type: "custom",
                business_type: "individual",
                country: "US",
                capabilities: {
                    card_payments: {requested: true},
                    transfers: {requested: true},
                },
                tos_acceptance: {
                    ip: req.ip,
                    date: moment().format('X')
                },
                ...accountData
            }), res);

            await to(UsersCards.update({stripe_account_id: acc.id}, {where: {user_id}}));
            if (!res.headersSent) {
                req.query.user_id = req.body.user_id;
                await customersController.getCustomerCards(req, res);
            }
        }
    } else {
        res.status(500).json({msg: 'Please add at least one credit card first'})
    }


    // if (ret) {
    //     return acc;
    // } else if (!res.headersSent) {
    //     req.query.user_id = req.body.user_id;
    //     await customersController.getCustomerCards(req, res);
    // }
};

exports.createStripeAccountLink = async (req, res) => {
    const {user_id} = req.query;
    let account = await stripe.accounts.create({
        type: "express",
        business_type: "individual",
        capabilities: {
            card_payments: {requested: true},
            transfers: {requested: true},
        },
        country: 'US',
    });

    await UsersCards.update({stripe_account_id: account.id}, {where: {user_id}});

    const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: process.env.API_URL,
        return_url: process.env.API_URL,
        type: 'account_onboarding',
    });

    res.json(accountLink)
};

exports.getStripeAccount = async (req, res) => {
    let {stripe_account_id} = req.query;
    const account = await to(stripe.accounts.retrieve(
        stripe_account_id
    ), res);
    res.json(account)
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

exports.removeBankAccount = async (req, res) => {
    let {bank_id, card_id, account_id} = req.query;
    const deleted = await to(stripe.accounts.deleteExternalAccount(
        account_id,
        bank_id || card_id
    ), res);

    res.json('OK');
}

exports.removeDebitCard = async (req, res) => {
    let {card_id, account_id} = req.query;
    const deleted = await to(stripe.accounts.deleteExternalAccount(
        account_id,
        card_id
    ), res);

    console.log(deleted)

    res.json('OK');
}