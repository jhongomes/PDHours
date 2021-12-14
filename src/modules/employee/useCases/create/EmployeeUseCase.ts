import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISquadRepository } from "../../../squad/repositories/ISquadRepository";
import { IEmployeeDTO } from "../../dtos/IEmployeeDTO";
import { Employee } from "../../infra/entities/Employee";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class CreateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository,
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository
    ) { }

    async execute({
        name,
        estimatedHours,
        squadId,
    }: IEmployeeDTO): Promise<Employee> {
        const employee = new Employee()

        if (name == " ") throw new AppError("Fill in fields!");

        if (estimatedHours < 1 || estimatedHours > 12) throw new AppError("estimated hours min 1 hour and max 12 hours")

        const squadIdVerify = await this.squadRepository.findById(squadId)

        if (!squadIdVerify) throw new AppError("Squad does not exist!")

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