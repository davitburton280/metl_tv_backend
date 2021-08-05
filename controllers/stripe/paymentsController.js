const db = require('../../models');
const UsersCards = db.users_cards;
const Channel = db.channels;

const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);


const to = require('../../helpers/getPromiseResult');

exports.createTransfer = async (req, res) => {
    let data = req.body;

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
        amount: 100,
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
        amount: 100,
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


exports.createPaymentIntent = async (req, res) => {
    let {customer_id, currency, card, purchase} = req.body;
    const intent = await stripe.paymentIntents.create({
        amount: purchase.unit_amount,
        currency,
        customer: customer_id,
        description: `${purchase.name} Metl Coins Bundle`,
        metadata: {name: purchase.name, price: purchase.unit_amount} // temporary unit_amount, maybe will be changed after currencies converter implemented
    }).catch(e => {
        res.status(500).json({msg: e?.raw?.message})
    });

    res.json(intent.client_secret)
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
        metadata: {name: purchase.name}
    }).catch(e => {
        res.status(500).json({msg: e?.raw?.message})
    });

    res.json(charge);
};

exports.getAllPaymentsHistory = async (req, res) => {
    let {customer, ...created} = req.query;
    console.log(req.query)
    const paymentIntents = await stripe.paymentIntents.list({
        created,
        customer
    });
    res.json(paymentIntents.data)
};

exports.getPurchasesHistory = async (req, res) => {
    let {customer, ...created} = req.query;
    const charges = await stripe.charges.list({created, customer});
    res.json(charges.data)
};

exports.getAccountPayouts = async (req, res) => {
    let {stripe_account_id, ...created} = req.query;

    const accountBankAccounts = await to(stripe.accounts.listExternalAccounts(
        stripe_account_id,
        {object: 'bank_account', limit: 1}
    ));

    // console.log("PAYOUTS", accountBankAccounts)
    const payouts = await stripe.payouts.list({
            destination: accountBankAccounts?.data?.[0]?.id,
            created
        },
        {
            stripeAccount: stripe_account_id,
        });

    console.log( payouts)
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