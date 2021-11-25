const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications/notificationsController');

router.get('/get', notificationsController.get);

module.exports = router;