import { ISquadDTO } from "../../dtos/ISquadDTO";
import { Squad } from "../../infra/entities/Squad";
import { ISquadRepository } from "../ISquadRepository";

class SquadRepositoryInMemory implements ISquadRepository {
    squads: Squad[] = [];

    async get(): Promise<Squad[]> {
        const all = this.squads
        return all
    }

    async findByName(name: string): Promise<Squad> {
        const squad = this.squads.find((squads) => squads.name === name)
        return squad
    }

    async findById(id: string): Promise<Squad> {
        const squad = this.squads.find((squads) => squads.id === id)
        return squad
    }

    async Get(): Promise<Squad[]> {
        const all = this.squads
        return all
    }

    async Create({
        id,
        name
    }: ISquadDTO): Promise<Squad> {
        const squad = new Squad()

        Object.assign(squad, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name,
        })
        this.squads.push(squad)

        return squad
    }

    async Update(squad: Squad): Promise<Squad> {
        this.squads.push(squad)

        return squad
    }

    async Delete(squad: Squad): Promise<void> {
        const findIndex = this.squads.findIndex(squad => squad === squad)

        this.squads.splice(findIndex, 1)
    }

}

export { SquadRepositoryInMemory }