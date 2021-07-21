const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

router.post('/stripe-checkout', purchasesController.createStripeCheckoutSession);
router.post('/stripe-charge', purchasesController.createStripeCharge);
router.post('/create-payment-intent', purchasesController.createPaymentIntent);
router.get('/get-all-payments-history', purchasesController.getAllPaymentsHistory);
router.get('/get-purchases-history', purchasesController.getPurchasesHistory);
router.get('/get-payouts-history', purchasesController.getAccountPayouts);
module.exports = router;
