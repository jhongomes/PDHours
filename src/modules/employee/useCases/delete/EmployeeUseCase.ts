import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class DeleteEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute(id: string): Promise<void> {
        const employee = await this.employeeRepository.findById(id)

        if (!employee) {
            throw new AppError("Employee does not exists!")
        }
        
        await this.employeeRepository.Delete(employee);
    }
}
export { DeleteEmployeeUseCase }