import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { UpdateEmployeeUseCase } from "../../modules/employee/useCases/update/EmployeeUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory
let updateEmployeeUseCase: UpdateEmployeeUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let createSquadUseCase: CreateSquadUseCase

describe("Update a employee", () => {
    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory);
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepositoryInMemory)
    })

    it("Should be able to update one squad", async () => {

        const squad = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad)

        const employee = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'Jhonatan G',
            estimatedHours: 12,
            squadId: '29d2b86a-0679-11ec-9a03-0242ac130003'
        }
        await createEmployeeUseCase.execute(employee)

        const updateEmployee = await updateEmployeeUseCase.execute({
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            name: 'Jhonatan Gomes',
            estimatedHours: 12,
            squadId: '29d2b86a-0679-11ec-9a03-0242ac130003'
        })
        
        expect(updateEmployee.name).toBe("Jhonatan Gomes")
        console.log(updateEmployee)
    })

})