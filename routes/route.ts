import { Router } from "express";
import activityRoute from "./activity.route"
import boatRoute from "./boat.route"
import fisherFolkRoute from "./fisherFolk.route"
import gearRoute from "./gear.route"

const routes = Router()

routes.use('/activity', activityRoute)
routes.use('/boat', boatRoute)
routes.use('/fisherFolk', fisherFolkRoute)
routes.use('/gear', gearRoute)

export default routes