const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// router.get('/session/:room', usersController.getOpentokParams);
router.get('/session/get-token', usersController.getSession)
module.exports = router;
