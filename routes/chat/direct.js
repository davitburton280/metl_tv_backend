const express = require('express');
const router = express.Router();
const directChatController = require('../../controllers/chat/directChatController');

router.get('/get-direct-messages', directChatController.getDirectMessages);
router.get('/get-messages-between-two-users', directChatController.getMessagesBetweenTwoUsers);
router.post('/save-message', directChatController.saveDirectMessage);

module.exports = router;