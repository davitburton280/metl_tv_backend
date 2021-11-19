const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/save-message', chatController.saveMessage);
router.get('/get-messages', chatController.getVideoMessages);
// router.get('/get-direct-chat-messages', chatController.getDirectChatMessages);
// router.get('/get-group-chat-messages', chatController.getGroupChatMessages);



module.exports = router;
