const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');
const validatePlaylistDetails = require('../validators/validatePlaylistDetails');
const isAuth = require('../helpers/isAuth');

router.post('/add', isAuth, validatePlaylistDetails.rules, playlistController.add);
router.post('/add-videos', isAuth, playlistController.addVideos);
router.post('/add-video-to-other-playlists', isAuth, playlistController.addVideosToOtherPlaylists);
router.get('/get', playlistController.get);
router.get('/search', playlistController.search);
router.get('/get-by-id', playlistController.getById);
router.put('/update-privacy', isAuth, playlistController.updatePrivacy);
router.put('/update-playlist-info', isAuth, validatePlaylistDetails.rules, playlistController.updatePlaylistInfo);
router.put('/change-thumbnail', isAuth, playlistController.changeThumbnail);
router.put('/update-video-position', isAuth, playlistController.updateVideoPosition);
router.delete('/remove-video', isAuth, playlistController.removeVideo);
router.delete('/remove', isAuth, playlistController.remove);

module.exports = router;
