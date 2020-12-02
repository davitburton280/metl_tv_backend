const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channelsController');

router.get('/get', channelsController.get);
router.get('/subscriptions', channelsController.getSubscriptions);
router.get('/search-with-videos', channelsController.searchChannelVideos);
router.get('/check-subscription', channelsController.checkChannelSubscription);
router.get('/get-subscriptions', channelsController.getSubscribers);
router.put('/subscribe', channelsController.subscribeToChannel);
router.put('/subscriptions/update-priority', channelsController.changeSubscriptionPriority);
router.put('/save-description', channelsController.saveDescription);

module.exports = router;
