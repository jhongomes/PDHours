import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEmployeeDTO } from "../../dtos/IEmployeeDTO";
import { Employee } from "../../infra/entities/Employee";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class UpdateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute({
        id,
        name,
        estimatedHours,
        squadId,
    }: IEmployeeDTO): Promise<Employee> {
        const employee = await this.employeeRepository.findById(id);

        if (!employee) {
            throw new AppError("Employee does not exists!");
        }

        employee.name = name;
        employee.estimatedHours = estimatedHours;
        employee.squadId = squadId;

        const updateEmployee = await this.employeeRepository.Update(employee);

        return updateEmployee;

    }
}
export { UpdateEmployeeUseCase }