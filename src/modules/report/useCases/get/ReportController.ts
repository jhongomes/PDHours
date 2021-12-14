import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllReportUseCase, GetReportUseCase } from "./ReportUseCase";

class GetReportController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getReportUseCase = container.resolve(GetReportUseCase);

        const report = await getReportUseCase.execute(id);

        return response.json(report);
    }
}

class GetAllReportController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllReportUseCase = container.resolve(GetAllReportUseCase);

        const report = await getAllReportUseCase.execute()

        return response.json(report);
    }
}

export { GetReportController, GetAllReportController }