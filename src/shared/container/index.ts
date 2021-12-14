import { container } from 'tsyringe'
import { EmployeeRepository } from '../../modules/employee/infra/repositories/EmployeeRepository'
import { IEmployeeRepository } from '../../modules/employee/repositories/IEmployeeRepository'
import { ReportRepository } from '../../modules/report/infra/repositories/ReportRepository'
import { IReportRepository } from '../../modules/report/repositories/IReportRepository'
import { SquadRepository } from '../../modules/squad/infra/repositories/SquadRepository'
import { ISquadRepository } from '../../modules/squad/repositories/ISquadRepository'

container.registerSingleton<ISquadRepository>(
    "SquadRepository",
    SquadRepository
)

container.registerSingleton<IEmployeeRepository>(
    "EmployeeRepository",
    EmployeeRepository
)

container.registerSingleton<IReportRepository>(
    "ReportRepository",
    ReportRepository
)