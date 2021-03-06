const express = require('express');
const router = express.Router();
const groupChatController = require('../../controllers/chat_mongo/groupChatController');
const validateChatGroupName = require('../../validators/validateChatGroupName');

router.get('/get-groups-messages', groupChatController.getGroupsMessages);
router.get('/get-group-by-name', groupChatController.getGroupByCustomName);
router.post('/create-group', validateChatGroupName.rules, groupChatController.createGroup);
router.delete('/remove-group', groupChatController.removeGroup);

router.get('/get-group-members', groupChatController.getGroupMembers);
router.post('/invite-group-members', groupChatController.addGroupMembers);
router.delete('/remove-group-member', groupChatController.removeGroupMember);

router.post('/join-group', groupChatController.addGroupMembers);
router.put('/accept-join-group', groupChatController.acceptGroupJoin);
router.put('/confirm-join-group', groupChatController.confirmJoinGroup);
router.put('/decline-join-group', groupChatController.declineGroupJoin);
router.put('/ignore-join-group', groupChatController.ignoreJoinGroup);
router.delete('/leave-group', groupChatController.leaveGroup);


router.post('/change-group-avatar', groupChatController.changeGroupAvatar);
// router.get('/get-chat-groups', groupChatController.getChatGroups);
// router.post('/save-message', groupChatController.saveGroupMessage);

module.exports = router;