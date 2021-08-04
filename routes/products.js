const express = require('express');
const router = express.Router();
const productsController = require('../controllers/stripe/productsController');

router.get('/get-stripe-products', productsController.getProducts);

module.exports = router;

