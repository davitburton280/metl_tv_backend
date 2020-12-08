const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/add', playlistController.add);
router.get('/get', playlistController.get);
router.get('/get-by-id', playlistController.getById);

module.exports = router;
