import { container } from 'tsyringe'
import { SquadRepository } from '../../modules/squad/infra/repositories/SquadRepository'
import { ISquadRepository } from '../../modules/squad/repositories/ISquadRepository'

container.registerSingleton<ISquadRepository>(
    "SquadRepository",
    SquadRepository
)