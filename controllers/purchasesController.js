const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

exports.createStripeCheckoutSession = async (req, res) => {
    let data = req.body;
    let {card, purchase} = req.body;
    console.log('stripe checkout', card)

    stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: card.stripe_customer_id,
        line_items: [
            {
                price: purchase.id,
                quantity: 1
            }
            // {
            //     price_data: {
            //         currency: 'usd',
            //         // price: purchase.id,
            //         product_data: {
            //             name: `${purchase.name} Metl Coins Bundle`,
            //         },
            //         unit_amount: purchase.unit_amount,
            //     },
            //     quantity: 1,
            // },
        ],
        mode: 'payment',
        success_url: `${process.env.API_URL}/payment-success`,
        cancel_url: `${process.env.API_URL}/payment-cancel`,
    })
        .then(session =>{
            res.json({id: session.id});
        })
        .catch(err => {
        // console.log(err)
        res.status(500).json({msg: err?.raw?.message})
    });

    // console.log(session)


};


