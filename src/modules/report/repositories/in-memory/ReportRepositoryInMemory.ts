import { IReportDTO } from "../../dtos/IReportDTO";
import { Report } from "../../infra/entities/Report";
import { IReportRepository } from "../IReportRepository";

class ReportRepositoryInMemory implements IReportRepository {
    report: Report[] = [];

    async findById(id: string): Promise<Report> {
        const report = this.report.find((report) => report.id = id)
        return report
    }

    async Get(): Promise<Report[]> {
        const all = this.report
        return all
    }

    async Create({
        id,
        description,
        spentHours,
        employeeId
    }: IReportDTO): Promise<Report> {
        const report = new Report()
        Object.assign(report, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            description,
            spentHours,
            employeeId
        })
        this.report.push(report)

        return report
    }

    async Update(report: Report): Promise<Report> {
        this.report.push(report)
        return report
    }

    async Delete(report: Report): Promise<void> {
        const findIndex = this.report.findIndex(report => report === report)

        this.report.splice(findIndex, 1)
    }

}

export { ReportRepositoryInMemory }