import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeeDTO } from "../../dtos/IEmployeeDTO";
import { Employee } from "../../infra/entities/Employee";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class CreateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute({
        name,
        estimatedHours,
        squadId,
    }: IEmployeeDTO): Promise<Employee> {
        const employee = new Employee()

        if (name == " ") {
            throw new AppError("Fill in fields!");
        }

        Object.assign(employee, {
            name,
            estimatedHours,
            squadId,
        })

        const createEmployee = await this.employeeRepository.Create(employee)

        return createEmployee
    }

}
export { CreateEmployeeUseCase }