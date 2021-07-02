const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

exports.createStripeCheckoutSession = async (req, res) => {
    let data = req.body;
    let {card, purchase} = req.body;
    console.log('stripe checkout', card)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: card.stripe_customer_id,
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `${purchase.bitPrice} Metl Coins Bundle`,
                    },
                    unit_amount: 30 * purchase.currencyPrice,
                },
                quantity: purchase.coinsLen,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.API_URL}/payment-success`,
        cancel_url: `${process.env.API_URL}/payment-cancel`,
    });

    console.log(session)

    res.json({id: session.id});
};
