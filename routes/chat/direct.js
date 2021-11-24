const express = require('express');
const router = express.Router();
// const directChatController = require('../../controllers/chat/directChatController_old');
const directChatController = require('../../controllers/chat/directChatController');

// router.get('/get-direct-messages', directChatController.getDirectMessages);
// router.post('/save-message', directChatController.saveDirectMessage);

router.get('/get-direct-messages', directChatController.getDirectMessages);
// router.post('/save-message', directChatController.saveDirectMessage);

module.exports = router;