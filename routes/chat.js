const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/save-message', chatController.saveMessage);
router.get('/get-messages', chatController.getVideoMessages);
router.get('/get-chat-messages', chatController.getChatMessages);
router.get('/get-chat-groups', chatController.getChatGroups);
router.post('/create-group', chatController.createGroup);

module.exports = router;
