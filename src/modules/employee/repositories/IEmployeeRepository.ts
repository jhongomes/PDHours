import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Employee } from "../infra/entities/Employee";

export interface IEmployeeRepository extends IBaseRepository<Employee> {
    findById(id: string): Promise<Employee>;
}