const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/add', playlistController.add);
router.post('/add-videos', playlistController.addVideos);
router.post('/add-video-to-other-playlists', playlistController.addVideosToOtherPlaylists);
router.get('/get', playlistController.get);
router.get('/search', playlistController.search);
router.get('/get-by-id', playlistController.getById);
router.put('/update-privacy', playlistController.updatePrivacy);
router.put('/update-playlist-info', playlistController.updatePlaylistInfo);
router.put('/change-thumbnail', playlistController.changeThumbnail);
router.put('/update-video-position', playlistController.updateVideoPosition);
router.delete('/remove-video', playlistController.removeVideo);
router.delete('/remove', playlistController.remove);

module.exports = router;
