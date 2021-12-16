import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { IReportDTO } from "../../modules/report/dtos/IReportDTO";
import { ReportRepositoryInMemory } from "../../modules/report/repositories/in-memory/ReportRepositoryInMemory";
import { CreateReportUseCase } from "../../modules/report/useCases/create/ReportUseCase";
import { UpdateReportUseCase } from "../../modules/report/useCases/update/ReportUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let createReportUseCase: CreateReportUseCase
let reportRepositoryInMemory: ReportRepositoryInMemory
let updateReportUseCase: UpdateReportUseCase
let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory

describe("Update a Report", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        reportRepositoryInMemory = new ReportRepositoryInMemory();
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        createReportUseCase = new CreateReportUseCase(reportRepositoryInMemory, employeeRepositoryInMemory)
        updateReportUseCase = new UpdateReportUseCase(reportRepositoryInMemory, employeeRepositoryInMemory)
    })

    it("Should be able to update one report", async () => {

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

        const report = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            description: 'desenvolvendo teste',
            spentHours: 4,
            employeeId: '59fde46d-40ad-46ac-a674-a8506c4791f6'
        }
        await createReportUseCase.execute(report)

        const updateReport = await updateReportUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            description: 'desenvolvendo teste unitarios',
            spentHours: 4,
            employeeId: '59fde46d-40ad-46ac-a674-a8506c4791f6'
        })
        expect(updateReport.description).toBe('desenvolvendo teste unitarios')
    })
})