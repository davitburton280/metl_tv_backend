const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);
const to = require('../helpers/getPromiseResult');

exports.createStripeCheckoutSession = async (req, res) => {
    let data = req.body;
    let {card, purchase, email} = req.body;
    console.log('checkout', purchase)

    stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: card.stripe_customer_id,
        // customer_email: email,
        line_items:
        // data:
            [
                // {
                //     description: `${purchase.name} Metl Coins Bundle`,
                //     // price: purchase.unit,
                //     quantity: 1,
                //     name: purchase.name,
                //     currency: purchase.currency,
                //     amount: purchase.unit_amount,
                //
                // }
                // {
                //     price: purchase.id,
                //     quantity: 1
                // }

                {
                    price_data: {
                        currency: 'usd',
                        // price: purchase.id,
                        product_data: {
                            name: purchase.name,
                            description: `${purchase.name} Metl Coins Bundle`,
                        },
                        unit_amount: purchase.unit_amount,
                    },
                    quantity: 1,
                },
            ]

        ,
        mode: 'payment',
        metadata: {
            description: `${purchase.name} Metl Coins Bundle`,
            name: purchase.name,
        },
        success_url: `${process.env.API_URL}/payment-success`,
        cancel_url: `${process.env.API_URL}/payment-cancel`,
    })
        .then(async (session) => {
            res.json({id: session.id});
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json({msg: err?.raw?.message})
        });

    // console.log(session)


};

exports.createPaymentIntent = async (req, res) => {
    let {customer_id, currency, card, purchase} = req.body;
    const intent = await stripe.paymentIntents.create({
        amount: purchase.unit_amount,
        currency,
        customer: customer_id,
        description: `${purchase.name} Metl Coins Bundle`,
        metadata: {name: purchase.name}
    }).catch(e => {
        res.status(500).json({msg: e?.raw?.message})
    });

    console.log(intent)
    res.json(intent.client_secret)
}

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
    let created = req.query;
    const paymentIntents = await stripe.paymentIntents.list({
        created
    });
    res.json(paymentIntents.data)
}
exports.getPurchasesHistory = async (req, res) => {
    let created = req.query;
    const charges = await stripe.charges.list({created});
    res.json(charges.data)
}