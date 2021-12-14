import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeeRepository } from "../../../employee/repositories/IEmployeeRepository";
import { IReportDTO } from "../../dtos/IReportDTO";
import { Report } from "../../infra/entities/Report";
import { IReportRepository } from "../../repositories/IReportRepository";

@injectable()
class CreateReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository,
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute({
        description,
        employeeId,
        spentHours
    }: IReportDTO): Promise<Report> {
        const report = new Report()

        if (description == " ") throw new AppError("Fill in fields!");

        const employeeIdVerify = await this.employeeRepository.findById(employeeId)

        if (!employeeIdVerify) throw new AppError("Employee does not exist!");

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