const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationController');
const isAuth = require('../helpers/isAuth');

router.get('/getList', isAuth, notificationsController.getList);
router.put('/update/:id', isAuth, notificationsController.updateState)
router.put('/update/state/all', isAuth, notificationsController.upadteStateForAll)
router.delete('/delete/:id', isAuth, notificationsController.delete)

module.exports = router;
