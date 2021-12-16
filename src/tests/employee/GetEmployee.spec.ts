import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { GetAllEmployeeUseCase, GetEmployeeUseCase } from "../../modules/employee/useCases/get/EmployeeUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory
let getEmployeeUseCase: GetEmployeeUseCase
let getAllEmployeeUseCase: GetAllEmployeeUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let createSquadUseCase: CreateSquadUseCase

describe("Listar all employee", () => {
    beforeEach(() => {
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory);
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        getEmployeeUseCase = new GetEmployeeUseCase(employeeRepositoryInMemory)
        getAllEmployeeUseCase = new GetAllEmployeeUseCase(employeeRepositoryInMemory)
    })

    it("Should be able to list all employee", async () => {

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

        const all = await getAllEmployeeUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);

        
    })

    it("Should be able to findOne id employee", async () => {

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

        const all = await getEmployeeUseCase.execute(employee.id)
        expect(all.id).toBe('59fde46d-40ad-46ac-a674-a8506c4791f6')
        
    })

})