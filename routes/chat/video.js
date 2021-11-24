const express = require('express');
const router = express.Router();
const videoChatController = require('../../controllers/chat/videoChatController');


router.post('/save-message', videoChatController.saveMessage);
router.get('/get-messages', videoChatController.getVideoMessages);


module.exports = router;
