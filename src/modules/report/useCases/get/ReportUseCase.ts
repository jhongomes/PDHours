import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Report } from "../../infra/entities/Report";
import { IReportRepository } from "../../repositories/IReportRepository";

@injectable()
class GetReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository) { }

    async execute(id: string): Promise<Report> {
        const report = await this.reportRepository.findById(id)

        if (!report) {
            throw new AppError("Report does not exists!")
        }

        return report;
    }
}

@injectable()
class GetAllReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository) { }

    async execute(): Promise<Report[]> {
        const report = await this.reportRepository.Get()

        return report;
    }
}

export { GetReportUseCase, GetAllReportUseCase }