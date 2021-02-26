const express = require('express');
const router = express.Router();
const stocksController = require('../controllers/stocksController');

router.get('/get-daily', stocksController.getDailyStocks);
// router.get('/session/leave', usersController.leaveSession);
// router.get('/get-user-info', usersController.getUserInfo);
// router.post('/change-profile-image', uploadAvatar, usersController.changeAvatar);
// router.post('/change-cover-image', uploadCover, usersController.changeCover);
module.exports = router;
