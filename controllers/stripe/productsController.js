const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

exports.getProducts = async (req, res) => {
    const products = await stripe.products.list({});
    const prices = await stripe.prices.list({});
    let merged = [];

    for (let i = 0; i < products.data.length; i++) {
        let productMetadata = products.data[i].metadata;
        merged.push({
                ...products.data[i],
                ...(prices.data.find((itmInner) => itmInner.product === products.data[i].id)),
                metadata: productMetadata
            }
        );
    }


    res.json(merged.sort((a, b) => a.unit_amount > b.unit_amount && 1 || -1));
};