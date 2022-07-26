const db = require('../models')
const SubscriotionPlans = db.subscriotion_plans

exports.roleMiddleware =  (role) => {
    return async (req, res, next) => {
        const user = req.decoded
		const subscriotionPlan = await SubscriotionPlans.findOne({ where: { id: user.id } })
        if (!subscriotionPlan || !user.subscription_id) res.sendStatus(403)

        if (!role.incudes(subscriotionPlan.name)) res.sendStatus(403)

        req.subscriotion = subscriotionPlan
        next()
    };
}