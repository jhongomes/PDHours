import { Router } from "express"
import { employeeRoutes } from "./employee.routes"
import { squadRoutes } from "./squad.routes"

const router = Router()
router.use("/squad", squadRoutes)
router.use("/employee", employeeRoutes)

export { router }