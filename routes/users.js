const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const isAuth = require('../helpers/isAuth');

// router.get('/session/:room', usersController.getOpentokParams);
router.get('/session/get-token', usersController.getSession);
router.get('/session/leave', usersController.leaveSession);
router.get('/get-user-info', isAuth, usersController.getUserInfo);
router.get('/get-stripe-customer-info', isAuth, usersController.getStripeCustomerInfo);
router.put('/save-profile-changes', isAuth, uploadUserAvatar, usersController.saveProfileChanges);
router.post('/change-profile-image', isAuth, uploadAvatar, usersController.changeAvatar);
router.post('/change-cover-image', isAuth, uploadCover, usersController.changeCover);

module.exports = router;
