import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Report } from "../infra/entities/Report";

export interface IReportRepository extends IBaseRepository<Report> {
    findById(id: string): Promise<Report>;
}   