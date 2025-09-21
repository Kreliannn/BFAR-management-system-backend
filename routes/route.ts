import { Router } from "express";
import activityRoute from "./activity.route"
import boatRoute from "./boat.route"
import fisherFolkRoute from "./fisherFolk.route"
import gearRoute from "./gear.route"
import systemRoute from "./system.routes"
import notificationRoute from "./notification.route"
import reportRoute from "./report.route"
import accountRoute from "./account.route"

const routes = Router()

routes.use('/activity', activityRoute)
routes.use('/boat', boatRoute)
routes.use('/fisherFolk', fisherFolkRoute)
routes.use('/gear', gearRoute)
routes.use('/system', systemRoute)
routes.use('/notification', notificationRoute)
routes.use('/report', reportRoute)
routes.use('/account', accountRoute)

export default routes