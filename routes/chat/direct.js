const express = require('express');
const router = express.Router();
const directChatController = require('../../controllers/chat/directChatController');

router.get('/get-direct-messages', directChatController.getDirectMessages);

module.exports = router;