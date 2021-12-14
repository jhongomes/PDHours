import { Router } from "express"
import { squadRoutes } from "./squad.routes"

const router = Router()

router.use("/squad", squadRoutes)

export { router }