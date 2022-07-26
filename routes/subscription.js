const express = require('express');
const router = express.Router();
const isAuth = require('../helpers/isAuth');
const SubscriotionPermissions = require('../controllers/subscriotion_permissions')
const SubscriotionPlans = require('../controllers/subscription_plans')

router.post('/permission', SubscriotionPermissions.create)
router.get('/permission', SubscriotionPermissions.getList)
router.post('/plan', isAuth, SubscriotionPlans.create)
router.get('/plan',SubscriotionPlans.get)

module.exports = router