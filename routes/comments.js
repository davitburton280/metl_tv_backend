const express = require('express');
const router = express.Router();
const isAuth = require('../helpers/isAuth');
const commentsController = require('../controllers/commentController')

// router.post('/comment/video')
router.get('/getList/:type/:id', commentsController.getList)
router.delete('/:id', isAuth, commentsController.delete)
router.get('/replyList/:id', commentsController.getReplys)

module.exports = router;