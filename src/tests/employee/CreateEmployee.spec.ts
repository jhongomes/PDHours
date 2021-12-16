import { IEmployeeDTO } from "../../modules/employee/dtos/IEmployeeDTO";
import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { v4 as uuidv4 } from "uuid";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory
let squadRepositoryInMemory: SquadRepositoryInMemory
let createSquadUseCase: CreateSquadUseCase


describe("Create employee", () => {
    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
    })
    it("should be able to create a new employee", async () => {

        const squad = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad)

        const employee = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'Backend',
            estimatedHours: 12,
            squadId: '29d2b86a-0679-11ec-9a03-0242ac130003'
        }

        await createEmployeeUseCase.execute(employee)
        const employeeCreated = await employeeRepositoryInMemory.findById(employee.id);

        expect(employeeCreated).toHaveProperty("id")
    })

})