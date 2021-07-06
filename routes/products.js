const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/get-stripe-products', productsController.getProducts);

module.exports = router;