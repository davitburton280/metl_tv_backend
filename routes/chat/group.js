const express = require('express');
const router = express.Router();
const groupChatController = require('../../controllers/chat/groupChatController');


router.get('/get-chat-groups', groupChatController.getChatGroups);
router.get('/get-group-members', groupChatController.getGroupMembers);
router.get('/get-groups-messages', groupChatController.getGroupsMessages);
router.post('/create-group', groupChatController.createGroup);
router.post('/add-group-members', groupChatController.addGroupMembers);
router.delete('/remove-group-member', groupChatController.removeGroupMember);
router.delete('/remove-group', groupChatController.removeGroup);
router.delete('/leave-group', groupChatController.leaveGroup);
router.post('/change-group-avatar', groupChatController.changeGroupAvatar);
router.put('/accept-join-group', groupChatController.acceptGroupJoin);
router.put('/decline-join-group', groupChatController.declineGroupJoin);

module.exports = router;