const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

router.post('/stripe-checkout', purchasesController.createStripeCheckoutSession);
router.post('/stripe-charge', purchasesController.createStripeCharge);
router.get('/get-all-payments-history', purchasesController.getAllPaymentsHistory);
router.get('/get-purchases-history', purchasesController.getPurchasesHistory);
module.exports = router;
