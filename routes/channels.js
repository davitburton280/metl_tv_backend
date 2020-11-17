const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channelsController');

router.get('/get', channelsController.get);
router.get('/search-with-videos', channelsController.searchChannelVideos);
router.get('/check-subscription', channelsController.checkChannelSubscription);
router.get('/get-subscriptions', channelsController.getUserChannelSubscriptions);
router.put('/subscribe', channelsController.subscribeToChannel);
router.put('/subscriptions/update-priority', channelsController.changeSubscriptionPriority);

module.exports = router;
