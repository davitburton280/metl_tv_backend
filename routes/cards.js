const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');
const isAuth = require('../helpers/isAuth');
const validateCard = require('../validators/validateCard');

router.get('/get-customer-cards', cardsController.getCustomerCards);
router.get('/get-balances', cardsController.getBalances);
router.post('/create-stripe-user-card', isAuth, validateCard.rules, cardsController.createStripeUserCard);
router.post('/create-transfer', isAuth, cardsController.createTransfer);
router.get('/get-account-transfers', isAuth, cardsController.getAccountTransfers);
// router.get('/get-account-payouts', isAuth, cardsController.getAccountPayouts);
router.get('/get-card-details', cardsController.getCardDetails);
router.put('/update-stripe-user-card-info', isAuth, cardsController.updateStripeCard);
router.put('/set-customer-card-as-default', cardsController.setCardAsDefault);
router.delete('/remove-stripe-user-card', isAuth, cardsController.removeStripeCard);


module.exports = router;