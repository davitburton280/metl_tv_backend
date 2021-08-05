const express = require('express');
const router = express.Router();
const isAuth = require('../../helpers/isAuth');

const accountsController = require('../../controllers/stripe/accountsController');

router.post('/create-stripe-bank-account', isAuth, accountsController.createStripeAccount);
router.get('/create-stripe-account-link', isAuth, accountsController.createStripeAccountLink);
router.get('/get-stripe-account', isAuth, accountsController.getStripeAccount);

module.exports = router;
