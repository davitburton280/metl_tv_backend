const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');
const isAuth = require('../helpers/isAuth');
const validateCard = require('../validators/validateCard');

router.get('/get-customer-cards', cardsController.getCustomerCards);
router.get('/get-balances', cardsController.getBalances);
router.post('/create-stripe-user-card', isAuth, validateCard.rules, cardsController.createStripeUserCard);

// router.get('/get-account-payouts', isAuth, cardsController.getAccountPayouts);
router.get('/get-card-details', cardsController.getCardDetails);
router.put('/update-stripe-user-card-info', isAuth, cardsController.updateStripeCard);
router.put('/set-customer-card-as-default', cardsController.setCardAsDefault);
router.delete('/remove-stripe-user-card', isAuth, cardsController.removeStripeCard);

router.get('/retrieve-balance', async (req, res) => {
    console.log('aaaa')
    const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);
    const balance = await stripe.balance.retrieve({
        stripeAccount: 'acct_1JNGx1QMf5zn7mWx'
    });
    res.json(balance)
})


module.exports = router;