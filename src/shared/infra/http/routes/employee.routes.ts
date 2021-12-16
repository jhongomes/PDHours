import { Router } from "express"
import { CreateEmployeeController } from "../../../../modules/employee/useCases/create/EmployeeController"
import { DeleteEmployeeController } from "../../../../modules/employee/useCases/delete/EmployeeController"
import { GetAllEmployeeController, GetAllHoursSquadMembersController, GetAllHoursTotalSquadMembersController, GetEmployeeController } from "../../../../modules/employee/useCases/get/EmployeeController"
import { UpdateEmployeeController } from "../../../../modules/employee/useCases/update/EmployeeController"

const employeeRoutes = Router()
const getEmployeeController = new GetEmployeeController();
const getAllEmployeeController = new GetAllEmployeeController();
const createEmployeeController = new CreateEmployeeController();

const getAllHoursSquadMembersController = new GetAllHoursSquadMembersController()
const getAllHoursTotalSquadMembersController = new GetAllHoursTotalSquadMembersController()

const updateEmployeeController = new UpdateEmployeeController();
const deleteEmployeeController = new DeleteEmployeeController();

employeeRoutes.get("/", getAllEmployeeController.handle);
employeeRoutes.get("/:id", getEmployeeController.handle);
employeeRoutes.get("/hours/:squadId", getAllHoursSquadMembersController.handle);
employeeRoutes.get("/hoursTotal/:squadId", getAllHoursTotalSquadMembersController.handle);
employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.put("/:id", updateEmployeeController.handle);
employeeRoutes.delete("/:id", deleteEmployeeController.handle);

export { employeeRoutes }