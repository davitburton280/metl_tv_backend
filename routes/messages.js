const express = require('express');
const router = express.Router();
const isAuth = require('../helpers/isAuth');
const messagesController = require('../controllers/messagesController')

router.route('/')
    .post(isAuth, messagesController.create)
router.route('/:id')
    .put(isAuth, messagesController.update)
    .delete(isAuth, messagesController.delete)
router.post('/getByConversation/:id', isAuth, messagesController.getListByConversation)

module.exports = router;