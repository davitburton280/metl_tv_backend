const express = require('express');
const router = express.Router();
const isAuth = require('../../helpers/isAuth');

const accountsController = require('../../controllers/stripe/accountsController');

router.get('/check-if-stripe-account-exists', isAuth, accountsController.checkIfUserHasStripeAccount);
router.post('/create-stripe-external-account', isAuth, accountsController.createStripeAccount);
router.put('/set-as-default-external-account', isAuth, accountsController.setAsDefaultExternalAccount);
router.get('/create-stripe-account-link', isAuth, accountsController.createStripeAccountLink);
router.get('/get-stripe-account', isAuth, accountsController.getStripeAccount);
router.delete('/remove-bank-account', isAuth, accountsController.removeBankAccount);
router.delete('/remove-debit-card', isAuth, accountsController.removeDebitCard);

module.exports = router;
