const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// router.get('/session/:room', usersController.getOpentokParams);
router.get('/session/get-token', usersController.getSession);
router.get('/session/leave', usersController.leaveSession);
router.get('/get-user-info', usersController.getUserInfo);
router.post('/change-profile-image', uploadAvatar, usersController.changeAvatar);
router.put('/save-profile-changes', uploadAvatar, usersController.saveProfileChanges);
router.post('/change-cover-image', uploadCover, usersController.changeCover);
module.exports = router;
