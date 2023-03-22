const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const isAuth = require('../helpers/isAuth');
const { authorizeUser } = require('../middleware/authorization');

// router.get('/session/:room', usersController.getOpentokParams);
router.get('/session/get-token', usersController.getSession);
router.get('/session/leave', usersController.leaveSession);
router.post('/sessions', isAuth, usersController.createSession);
router.get('/sessions/:id/token', usersController.getTokenBySessionId);
router.delete('/sessions/:id/close', isAuth, usersController.closeSessionById);
router.get('/get-user-info', isAuth, usersController.getUserInfo);
router.get('/detail', isAuth, usersController.getUserDetail);
router.get('/get-contacts', isAuth, usersController.getContacts);
router.get('/check-connection', isAuth, usersController.checkIfUsersConnected);
router.put('/save-profile-changes', isAuth, usersController.saveProfileChanges);
router.post('/change-profile-image', isAuth, uploadAvatar, usersController.changeAvatar);
router.post('/change-cover-image', isAuth, uploadCover, usersController.changeCover);
router.post('/:id/change-channel-cover', isAuth, authorizeUser, uploadChannelCover, usersController.changeChannelCover);
router.post('/:id/change-channel-image', isAuth, authorizeUser, uploadChannelImage, usersController.changeChannelImage);
router.put('/block-user', isAuth, usersController.blockUser);
router.get('/get-connections', isAuth, usersController.getUserConnections);


module.exports = router;
