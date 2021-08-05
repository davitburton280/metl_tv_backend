const express = require('express');
const router = express.Router();

const isAuth = require('../../helpers/isAuth');

const paymentsController = require('../../controllers/stripe/paymentsController');

router.post('/create-transfer', isAuth, paymentsController.createTransfer);
router.post('/create-topup', isAuth, paymentsController.createTopup);
router.get('/get-account-transfers', isAuth, paymentsController.getAccountTransfers);

module.exports = router;