import { Router } from "express"
import { employeeRoutes } from "./employee.routes"
import { reportRoutes } from "./report.routes"
import { squadRoutes } from "./squad.routes"

const router = Router()
router.use("/squad", squadRoutes)
router.use("/employee", employeeRoutes)
router.use("/report", reportRoutes)

export { router }