const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channelsController');

router.get('/get', channelsController.get);

module.exports = router;
