import { Router } from "express"
import { CreateSquadController } from "../../../../modules/squad/useCases/create/SquadController"
import { DeleteSquadController } from "../../../../modules/squad/useCases/delete/SquadController";
import { GetAllSquadController, GetSquadController } from "../../../../modules/squad/useCases/get/SquadController";
import { UpdateSquadController } from "../../../../modules/squad/useCases/update/SquadController";

const squadRoutes = Router()
const createSquadController = new CreateSquadController();
const getAllSquadController = new GetAllSquadController();
const getSquadController = new GetSquadController();
const updateSquadController = new UpdateSquadController();
const deleteSquadController = new DeleteSquadController();

squadRoutes.post("/", createSquadController.handle);
squadRoutes.get("/", getAllSquadController.handle);
squadRoutes.get("/:name", getSquadController.handle);
squadRoutes.put("/:id", updateSquadController.handle);
squadRoutes.delete("/:id", deleteSquadController.handle);

export { squadRoutes }