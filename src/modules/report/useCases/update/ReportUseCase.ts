import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeeRepository } from "../../../employee/repositories/IEmployeeRepository";
import { IReportDTO } from "../../dtos/IReportDTO";
import { Report } from "../../infra/entities/Report";
import { IReportRepository } from "../../repositories/IReportRepository";

@injectable()
class UpdateReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository,
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute({
        id,
        description,
        employeeId,
        spentHours
    }: IReportDTO): Promise<Report> {
        const report = await this.reportRepository.findById(id);

        if (!report) {
            throw new AppError("Report does not exists!");
        }

        const employeeVerify = await this.employeeRepository.findById(employeeId);

        if (!employeeVerify) {
            throw new AppError("Employee does not exists!");
        }

        report.description = description;
        report.employeeId = employeeId;
        report.spentHours = spentHours;

        const updateReport = await this.reportRepository.Update(report);

        return updateReport;

    }
}
export { UpdateReportUseCase }