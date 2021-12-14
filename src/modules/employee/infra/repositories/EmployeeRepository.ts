import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepository";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";
import { Employee } from "../entities/Employee";

class EmployeeRepository extends BaseRepository<Employee> implements IEmployeeRepository {
    constructor() {
        super(Employee);
    }

    async findById(id: string): Promise<Employee> {
        const employee = await this.repository.findOne({ id })

        return employee;
    }
}

export { EmployeeRepository }