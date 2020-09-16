const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/get-opentok-params/', usersController.getOpentokParams);

module.exports = router;
