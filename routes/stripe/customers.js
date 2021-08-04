const express = require('express');
const router = express.Router();
const customersController = require('../../controllers/stripe/customersController');

router.get('/get-customer-cards', customersController.getCustomerCards);

module.exports = router;