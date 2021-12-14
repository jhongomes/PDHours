import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Employee } from "../../infra/entities/Employee";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class GetEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute(id: string): Promise<Employee> {
        const employee = await this.employeeRepository.findById(id)

        if (!employee) {
            throw new AppError("Employee does not exists!")
        }

        return employee;
    }
}

@injectable()
class GetAllEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute(): Promise<Employee[]> {
        const employee = await this.employeeRepository.Get()

        return employee;
    }
}

export { GetEmployeeUseCase, GetAllEmployeeUseCase }