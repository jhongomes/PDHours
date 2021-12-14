import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IReportDTO } from "../../dtos/IReportDTO";
import { Report } from "../../infra/entities/Report";
import { IReportRepository } from "../../repositories/IReportRepository";

@injectable()
class CreateReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository) { }

    async execute({
        description,
        employeeId,
        spentHours
    }: IReportDTO): Promise<Report> {
        const report = new Report()

        if (description == " ") {
            throw new AppError("Fill in fields!");
        }

        Object.assign(report, {
            description,
            employeeId,
            spentHours
        })

        const createReport = await this.reportRepository.Create(report)

        return createReport
    }

}
export { CreateReportUseCase }