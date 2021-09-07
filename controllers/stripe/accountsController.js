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
    let {email, ret, user_id, customer_id, ...accountData} = req.body;
    let extAccountType = accountData.external_account.object;

    let userCards = await UsersCards.findAll({where: {user_id}});
    console.log('here!!!')
    if (userCards) {
        let stripeAccountId = userCards.filter(uc => uc.stripe_account_id)[0]?.stripe_account_id;


        // If user already created Stripe account, just adding external account for him
        if (stripeAccountId) {

            const externalAccountsList = await stripe.accounts.listExternalAccounts(
                stripeAccountId, {});


            const bankAccountLen = externalAccountsList.data.filter(ea => ea.object === 'bank_account').length;
            const debitCardAccountLen = externalAccountsList.data.filter(ea => ea.object === 'card').length;

            if ((bankAccountLen === 0 && extAccountType === 'bank_account') || (debitCardAccountLen === 0 && extAccountType === 'card')) {

                const externalAccount = await to(stripe.accounts.createExternalAccount(
                    stripeAccountId,
                    {
                        external_account: accountData.external_account,
                    }
                ));
                // console.log('EXT!!!!')
                // console.log(externalAccount)
                //
                // const bankAccountVerify = await stripe.customers.verifySource(
                //     customer_id,
                //     externalAccount.id,
                //     {amounts: [32, 45]}
                // );
                // console.log(bankAccountVerify)
                //
                // if (bankAccountVerify) {
                req.query.user_id = req.body.user_id;
                await customersController.getCustomerCards(req, res);
                // }
            } else {
                res.status(500).json({msg: 'We support not more than 2 accounts for payouts: 1 bank account and 1 debit card'});
            }

            // If user hasn't got Stripe account, adding it with external account
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

exports.setAsDefaultExternalAccount = async (req, res) => {
    let {stripe_account_id, ext_account_id} = req.body;
    await to(stripe.accounts.updateExternalAccount(
        stripe_account_id,
        ext_account_id,
        {default_for_currency: true}
    ));

    req.query.stripe_account_id = req.body.stripe_account_id;
    await this.getStripeAccount(req, res);
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
    await to(stripe.accounts.deleteExternalAccount(
        account_id,
        bank_id || card_id
    ), res);

    if (!res.headersSent) {
        res.json('OK');
    }
}

exports.removeDebitCard = async (req, res) => {
    let {card_id, account_id} = req.query;
    const deleted = await to(stripe.accounts.deleteExternalAccount(
        account_id,
        card_id
    ), res);

    if (!res.headersSent) {
        res.json('OK');
    }
}

exports.getBalance = async (req, res) => {
    let {stripe_account_id} = req.query;
    const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);
    const balance = await stripe.balance.retrieve({
        stripeAccount: stripe_account_id
    });
    res.json(balance)
}
