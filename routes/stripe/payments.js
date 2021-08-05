const express = require('express');
const router = express.Router();

const isAuth = require('../../helpers/isAuth');

const paymentsController = require('../../controllers/stripe/paymentsController');

router.post('/create-transfer', isAuth, paymentsController.createTransfer);
router.post('/create-topup', isAuth, paymentsController.createTopup);
router.get('/get-account-transfers', isAuth, paymentsController.getAccountTransfers);
router.post('/stripe-charge', paymentsController.createStripeCharge);
router.post('/create-payment-intent', paymentsController.createPaymentIntent);
router.get('/get-all-payments-history', paymentsController.getAllPaymentsHistory);
router.get('/get-purchases-history', paymentsController.getPurchasesHistory);
router.get('/get-payouts-history', paymentsController.getAccountPayouts);
router.get('/get-account-payouts', paymentsController.getAccountPayouts);

module.exports = router;