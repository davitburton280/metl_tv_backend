const express = require('express');
const router = express.Router();
const directChatController = require('../../controllers/chat/directChatController');
const validateMessage = require('../../validators/validateChatMessage');

router.get('/get-direct-messages', directChatController.getDirectMessages);
router.get('/get-messages-between-two-users', directChatController.getMessagesBetweenTwoUsers);
router.post('/save-message', validateMessage.rules, directChatController.saveDirectMessage);

module.exports = router;