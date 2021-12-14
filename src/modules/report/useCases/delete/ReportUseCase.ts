import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IReportRepository } from "../../repositories/IReportRepository";

@injectable()
class DeleteReportUseCase {
    constructor(
        @inject("ReportRepository")
        private readonly reportRepository: IReportRepository) { }

    async execute(id: string): Promise<void> {
        const report = await this.reportRepository.findById(id)

        if (!report) {
            throw new AppError("Report does not exists!")
        }
        await this.reportRepository.Delete(report);
    }
}
export { DeleteReportUseCase }