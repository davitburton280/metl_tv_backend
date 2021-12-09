const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications/notificationsController');

router.get('/get', notificationsController.get);
router.put('/read', notificationsController.read);
router.put('/mark-all-as-read', notificationsController.markAllAsRead);
router.delete('/remove', notificationsController.remove);

module.exports = router;