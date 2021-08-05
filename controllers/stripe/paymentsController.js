const db = require('../../models');
const UsersCards = db.users_cards;
const Channel = db.channels;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);


const to = require('../../helpers/getPromiseResult');

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