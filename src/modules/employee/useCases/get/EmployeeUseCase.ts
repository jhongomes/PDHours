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

@injectable()
class GetAllHoursSquadMembersUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute(squadId: string): Promise<any[]> {
        const all = await this.employeeRepository.filterHours(squadId)

        const response = all.map(employee => {
            return ({
                name: employee.name,
                estimatedHours: employee.estimatedHours,
            })
        })
        return response;

    }
}

@injectable()
class GetAllHoursTotalSquadMembersUseCase {
    constructor(
        @inject("EmployeeRepository")
        private readonly employeeRepository: IEmployeeRepository) { }

    async execute(squadId: string): Promise<any> {
        let total = 0
        const all = await this.employeeRepository.filterHours(squadId)

        const result = all.map(employee => employee.estimatedHours)
        result.map(employee => {
            total = total + employee
        })

        return `Total de horas: ${total}`
    }
}

export {
    GetEmployeeUseCase, GetAllEmployeeUseCase,
    GetAllHoursSquadMembersUseCase, GetAllHoursTotalSquadMembersUseCase
}