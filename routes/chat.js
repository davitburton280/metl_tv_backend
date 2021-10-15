const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.post('/save-message', chatController.saveMessage);
router.get('/get-messages', chatController.getVideoMessages);
router.get('/get-chat-messages', chatController.getChatMessages);
router.get('/get-chat-groups', chatController.getChatGroups);
router.get('/get-group-members', chatController.getGroupMembers);
router.post('/create-group', chatController.createGroup);
router.post('/add-group-members', chatController.addGroupMembers);
router.delete('/remove-group-member', chatController.removeGroupMember);
router.delete('/remove-group', chatController.removeGroup);
router.delete('/leave-group', chatController.leaveGroup);
router.post('/change-group-avatar', chatController.changeGroupAvatar);

module.exports = router;
