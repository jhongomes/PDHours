import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReportUseCase } from "./ReportUseCase";

class CreateReportController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, employeeId, spentHours } = request.body;

        const createReportUseCase = container.resolve(CreateReportUseCase);
        const report = await createReportUseCase.execute({
            description,
            employeeId,
            spentHours
        });

        return response.status(201).json(report);
    }
}

export { CreateReportController }