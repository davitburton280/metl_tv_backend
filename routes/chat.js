const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/save-message', chatController.saveMessage);
router.get('/get-messages', chatController.getVideoMessages);

module.exports = router;
