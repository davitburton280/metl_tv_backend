const express = require('express');
const router = express.Router();
const customersController = require('../../controllers/stripe/customersController');

router.get('/get-customer-cards', customersController.getCustomerCards);
router.post('/create-customer-card', customersController.createCustomerCard);
router.put('/set-customer-card-as-default', customersController.setCardAsDefault);

module.exports = router;