import { EmployeeRepositoryInMemory } from "../../modules/employee/repositories/in-memory/EmployeeRepositoryInMemory";
import { CreateEmployeeUseCase } from "../../modules/employee/useCases/create/EmployeeUseCase";
import { IReportDTO } from "../../modules/report/dtos/IReportDTO";
import { ReportRepositoryInMemory } from "../../modules/report/repositories/in-memory/ReportRepositoryInMemory";
import { CreateReportUseCase } from "../../modules/report/useCases/create/ReportUseCase";
import { GetAllReportUseCase, GetReportUseCase } from "../../modules/report/useCases/get/ReportUseCase";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let createReportUseCase: CreateReportUseCase
let reportRepositoryInMemory: ReportRepositoryInMemory
let getAllReportUseCase: GetAllReportUseCase
let getReportUseCase: GetReportUseCase
let createEmployeeUseCase: CreateEmployeeUseCase
let employeeRepositoryInMemory: EmployeeRepositoryInMemory

describe("List  Report", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        reportRepositoryInMemory = new ReportRepositoryInMemory();
        employeeRepositoryInMemory = new EmployeeRepositoryInMemory();
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
        createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepositoryInMemory, squadRepositoryInMemory)
        createReportUseCase = new CreateReportUseCase(reportRepositoryInMemory, employeeRepositoryInMemory)
        getAllReportUseCase = new  GetAllReportUseCase(reportRepositoryInMemory)
        getReportUseCase = new  GetReportUseCase(reportRepositoryInMemory)
    })

    it("Should be able to list all report", async () => {

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

        const report: IReportDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            description: 'desenvolvendo teste',
            spentHours: 4,
            employeeId: '59fde46d-40ad-46ac-a674-a8506c4791f6'
        }
        await createReportUseCase.execute(report)
        const all = await getAllReportUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("Should be able to findOne id report", async () => {

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

        const report: IReportDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            description: 'desenvolvendo teste',
            spentHours: 4,
            employeeId: '59fde46d-40ad-46ac-a674-a8506c4791f6'
        }
        await createReportUseCase.execute(report)
        const reportOne = await getReportUseCase.execute(report.id)
        expect(reportOne.id).toBe('29d2b86a-0679-11ec-9a03-0242ac130003')

    })
})