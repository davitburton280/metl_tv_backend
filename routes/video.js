const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/save-video-token', videoController.saveVideoToken);
router.post('/save-video-data', uploadVideoStreamFile, videoController.saveVideoData);

module.exports = router;