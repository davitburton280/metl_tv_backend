const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.get('/get-chat-groups', chatController.getChatGroups);
router.get('/get-group-members', chatController.getGroupMembers);
router.get('/get-groups-messages', chatController.getGroupsMessages);
router.post('/create-group', chatController.createGroup);
router.post('/add-group-members', chatController.addGroupMembers);
router.delete('/remove-group-member', chatController.removeGroupMember);
router.delete('/remove-group', chatController.removeGroup);
router.delete('/leave-group', chatController.leaveGroup);
router.post('/change-group-avatar', chatController.changeGroupAvatar);
router.put('/accept-join-group', chatController.acceptGroupJoin);
router.put('/decline-join-group', chatController.declineGroupJoin);

module.exports = router;