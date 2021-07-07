const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/get-stripe-products', productsController.getProducts);
router.delete('/remove', productsController.removeProduct);

module.exports = router;

