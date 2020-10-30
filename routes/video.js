const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/save-video-token', videoController.saveVideoToken);
router.post('/save-video-data', uploadVideoStreamFile,  videoController.saveVideoData);
router.post('/save-video-thumbnail', uploadVideoThumbFile, videoController.saveVideoThumbnail);
router.delete('/remove-video-thumbnail', uploadVideoThumbFile, videoController.removeVideoThumbnail);
router.post('/save-video-message', uploadVideoStreamFile, videoController.saveVideoMessage);
router.get('/get-user-videos', videoController.getUserVideos);
router.get('/get-video-by-id', videoController.getVideoById);

module.exports = router;
