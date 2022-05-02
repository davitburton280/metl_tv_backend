const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validatePostDetails = require('../validators/validatePostDetails');
const isAuth = require('../helpers/isAuth');

router.post('/add', isAuth, validatePostDetails.rules, postsController.add);
router.get('/get', postsController.get);
router.put('/vote', postsController.vote);
router.get('/get-by-id', isAuth, postsController.getById);
router.delete('/remove', isAuth, postsController.remove);
router.put('/edit', isAuth, postsController.edit);
router.put('/like', isAuth, postsController.like);

module.exports = router;