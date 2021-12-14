import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepository";
import { IReportRepository } from "../../repositories/IReportRepository";
import { Report } from "../entities/Report";

class ReportRepository extends BaseRepository<Report> implements IReportRepository {
    constructor() {
        super(Report);
    }

    async findById(id: string): Promise<Report> {
        const report = await this.repository.findOne({
            where: { id },
            relations: ["employeeID"],
            order: {
                employeeId: "ASC"
            }
        })

        return report;
    }
}

export { ReportRepository }