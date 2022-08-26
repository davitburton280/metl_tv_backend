const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channelsController');
const validateChannelDescription = require('../validators/validateChannelDescription');
const isAuth = require('../helpers/isAuth');

router.get('/get', channelsController.get);
router.get('/subscriptions', isAuth, channelsController.getSubscriptions);
router.get('/search-with-videos', channelsController.searchChannelVideos);
router.get('/check-subscription', isAuth, channelsController.checkChannelSubscription);
router.get('/get-subscriptions', isAuth, channelsController.getSubscribers);
router.put('/subscribe', isAuth, channelsController.subscribeToChannel);
router.put('/subscriptions/update-priority',isAuth, channelsController.changeSubscriptionPriority);
router.put('/save-description',isAuth, validateChannelDescription.rules, channelsController.saveDescription);
router.put('/save-channel-details', isAuth, channelsController.saveChannelDetails);
router.get('/get-channel-subscribers', isAuth, channelsController.getChannelSubscribers);
router.get('/detail/:id', isAuth, channelsController.getChanelDetail)
router.put('/:id', isAuth, channelsController.update)
router.get('/videos/:id', isAuth, channelsController.getChanelVideos)

module.exports = router;
