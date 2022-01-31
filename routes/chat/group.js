const express = require('express');
const router = express.Router();
const groupChatController = require('../../controllers/chat_mongo/groupChatController');

router.get('/get-groups-messages', groupChatController.getGroupsMessages);
router.post('/create-group', groupChatController.createGroup);
router.delete('/remove-group', groupChatController.removeGroup);

router.get('/get-group-members', groupChatController.getGroupMembers);
router.post('/add-group-members', groupChatController.addGroupMembers);
router.delete('/remove-group-member', groupChatController.removeGroupMember);

// router.get('/get-chat-groups', groupChatController.getChatGroups);
// router.delete('/leave-group', groupChatController.leaveGroup);
// router.post('/change-group-avatar', groupChatController.changeGroupAvatar);
// router.put('/accept-join-group', groupChatController.acceptGroupJoin);
// router.put('/decline-join-group', groupChatController.declineGroupJoin);
// router.post('/save-message', groupChatController.saveGroupMessage);

module.exports = router;