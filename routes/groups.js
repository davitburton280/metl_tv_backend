const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groupsController');
const isAuth = require('../helpers/isAuth');
const validateGroupName = require('../validators/validateGroupName');

router.get('/get-regular-groups', isAuth, groupsController.get);

router.get('/get-group-by-name', groupsController.getGroupByCustomName);
router.post('/create-group', validateGroupName.rules, groupsController.createGroup);
router.put('/update-group/:id', groupsController.updateGroup)
router.delete('/remove-group', groupsController.removeGroup);

router.get('/get-group-members', groupsController.getGroupMembers);
router.post('/add-group-members', groupsController.addGroupMembers);
router.delete('/remove-group-member', groupsController.removeGroupMember);

router.post('/join-group', groupsController.addGroupMembers);
router.put('/accept-join-group', groupsController.acceptGroupJoin);
router.put('/confirm-join-group', groupsController.confirmJoinGroup);
router.put('/decline-join-group', groupsController.declineGroupJoin);
router.put('/ignore-join-group', groupsController.ignoreJoinGroup);
router.delete('/leave-group', groupsController.leaveGroup);

router.put('/make-member-admin', groupsController.makeMemberAdmin);
router.put('/decline-make-member-admin', groupsController.declineMakeAdmin);
router.put('/remove-admin-privileges', groupsController.removeAdminPrivileges);

module.exports = router;