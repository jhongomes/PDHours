import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateReportUseCase } from "./ReportUseCase";

class UpdateReportController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { description, employeeId, spentHours } = request.body;

        const updateReportUseCase = container.resolve(UpdateReportUseCase)

        const updateReport = await updateReportUseCase.execute({
            id,
            description,
            employeeId,
            spentHours
        })
        return response.json(updateReport);
    }
}

export { UpdateReportController };