import { Router } from "express";
import { CreateReportController } from "../../../../modules/report/useCases/create/ReportController";
import { DeleteReportController } from "../../../../modules/report/useCases/delete/ReportController";
import { GetAllReportController, GetReportController } from "../../../../modules/report/useCases/get/ReportController";
import { UpdateReportController } from "../../../../modules/report/useCases/update/ReportController";

const reportRoutes = Router();
const getAllReportController = new GetAllReportController();
const getReportController = new GetReportController();
const createReportController = new CreateReportController();
const updateReportController = new UpdateReportController
const deleteReportController = new DeleteReportController();

reportRoutes.get("/", getAllReportController.handle);
reportRoutes.get("/:id", getReportController.handle);
reportRoutes.post("/", createReportController.handle);
reportRoutes.put("/:id", updateReportController.handle);
reportRoutes.delete("/:id", deleteReportController.handle);

export { reportRoutes }