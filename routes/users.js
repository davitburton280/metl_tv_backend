const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const isAuth = require('../helpers/isAuth');
const validateStripeCard = require('../validators/validateUserStripeCard');

// router.get('/session/:room', usersController.getOpentokParams);
router.get('/session/get-token', usersController.getSession);
router.get('/session/leave', usersController.leaveSession);
router.get('/get-user-info', isAuth, usersController.getUserInfo);
router.get('/get-customer-cards', usersController.getCustomerCards);
router.put('/save-profile-changes', isAuth, uploadUserAvatar, usersController.saveProfileChanges);
router.post('/change-profile-image', isAuth, uploadAvatar, usersController.changeAvatar);
router.post('/change-cover-image', isAuth, uploadCover, usersController.changeCover);
router.post('/create-stripe-user-card', isAuth, usersController.createStripeUserCard);
router.get('/get-card-details', usersController.getCardDetails);
router.put('/update-stripe-user-card-info', isAuth, usersController.updateStripeCard);
router.delete('/remove-stripe-user-card', isAuth, usersController.removeStripeCard);
module.exports = router;
