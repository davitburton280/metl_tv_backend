const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validatePostDetails = require('../validators/validatePostDetails');
const isAuth = require('../helpers/isAuth');

router.post('/add', isAuth, postsController.add);
router.get('/get', postsController.get);
router.put('/vote', postsController.vote);
router.get('/get-by-id', isAuth, postsController.getById);
router.delete('/remove', isAuth, postsController.remove);
router.put('/edit', isAuth, postsController.edit);
router.put('/like', isAuth, postsController.like);
router.put('/comment', isAuth, postsController.comment);
router.get('/comment', isAuth, postsController.getComments);
router.get('/comment/replys', isAuth, postsController.getCommentReplys);
router.post('/comment/reaction', isAuth, postsController.reactionPostComment);

module.exports = router;