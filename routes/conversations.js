const express = require('express');
const router = express.Router();
const isAuth = require('../helpers/isAuth');
const conversationsController = require('../controllers/conversationsController')

router.post('/getList', isAuth, conversationsController.getList)
router.post('/', isAuth, conversationsController.create)


module.exports = router;