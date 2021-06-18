const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

router.post('/stripe-checkout', purchasesController.createStripeCheckoutSession);

module.exports = router;
