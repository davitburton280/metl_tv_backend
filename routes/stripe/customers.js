const express = require('express');
const router = express.Router();
const isAuth = require('../../helpers/isAuth');
const customersController = require('../../controllers/stripe/customersController');

router.get('/get-customer-cards', customersController.getCustomerCards);
router.post('/create-customer-card', customersController.createCustomerCard);
router.put('/set-customer-card-as-default', customersController.setCardAsDefault);
router.delete('/remove-customer-card', isAuth, customersController.removeStripeCard);

module.exports = router;