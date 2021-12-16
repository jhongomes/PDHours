import { IEmployeeDTO } from "../../dtos/IEmployeeDTO";
import { Employee } from "../../infra/entities/Employee";
import { IEmployeeRepository } from "../IEmployeeRepository";

class EmployeeRepositoryInMemory implements IEmployeeRepository {
    employee: Employee[] = []

    async findById(id: string): Promise<Employee> {
        const employee = this.employee.find((employee) => employee.id === id)
        return employee
    }

    async filterHours(squadId: string): Promise<any[]> {
        const employee = this.employee.find((employee) => employee.squadId === squadId)
        return 
    }

    async Get(): Promise<Employee[]> {
        const all = this.employee
        return all
    }

    async Create({
        id,
        name,
        estimatedHours,
        squadId
    }: IEmployeeDTO): Promise<Employee> {
        const employee = new Employee()

        Object.assign(employee, {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name,
            estimatedHours,
            squadId : '29d2b86a-0679-11ec-9a03-0242ac130003'
        })
        this.employee.push(employee)

        return employee
    }

    async Update(employee: Employee): Promise<Employee> {
        this.employee.push(employee)
        return employee
    }

    async Delete(employee: Employee): Promise<void> {
        const findIndex = this.employee.findIndex(employee => employee === employee)

        this.employee.splice(findIndex, 1)
    }

}

export { EmployeeRepositoryInMemory }