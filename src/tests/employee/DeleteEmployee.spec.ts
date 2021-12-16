import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { DeleteEmployeeUseCase } from "../../modules/employee/useCases/delete/EmployeeUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory
let deleteEmployeeUseCase: DeleteEmployeeUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let createSquadUseCase: CreateSquadUseCase

describe("Delete a employee", () => {
    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory);
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepositoryInMemory)
    })

    it("Should be able to exclude one squad", async () => {

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
        const findId = await deleteEmployeeUseCase.execute(employee.id)
        expect(findId).toBe(undefined)
    })

})