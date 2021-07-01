const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');
const isAuth = require('../helpers/isAuth');
const validateCard = require('../validators/validateCard');

router.get('/get-customer-cards', cardsController.getCustomerCards);
router.post('/create-stripe-user-card', isAuth, validateCard.rules, cardsController.createStripeUserCard);
router.get('/get-card-details', cardsController.getCardDetails);
router.put('/update-stripe-user-card-info', isAuth, cardsController.updateStripeCard);
router.put('/set-customer-card-as-default', cardsController.setCardAsDefault);
router.delete('/remove-stripe-user-card', isAuth, cardsController.removeStripeCard);


module.exports = router;