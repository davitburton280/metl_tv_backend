const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validatePostDetails = require('../validators/validatePostDetails');
const isAuth = require('../helpers/isAuth');

router.post('/add', isAuth, validatePostDetails.rules, postsController.add);
router.get('/get', postsController.get);
router.get('/get-by-id', postsController.getById);

module.exports = router;