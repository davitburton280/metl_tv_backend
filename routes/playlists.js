const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/add', playlistController.add);
router.post('/add-videos', playlistController.addVideos);
router.get('/get', playlistController.get);
router.get('/get-by-id', playlistController.getById);
router.put('/update-privacy', playlistController.updatePrivacy);


module.exports = router;
