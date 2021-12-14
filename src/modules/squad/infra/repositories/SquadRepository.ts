import { BaseRepository } from "../../../../shared/infra/repositories/BaseRepository";
import { ISquadRepository } from "../../repositories/ISquadRepository";
import { Squad } from "../entities/Squad";

class SquadRepository extends BaseRepository<Squad> implements ISquadRepository {
    constructor() {
        super(Squad);
    }

    async get(): Promise<Squad[]> {
        return this.repository.find({
            relations: ["employeeId"]
        })
    }

    async findById(id: string): Promise<Squad> {
        const squad = await this.repository.findOne({ id })

        return squad;
    }

    async findByName(name: string): Promise<Squad> {
        const squad = await this.repository.findOne({
            where : { name: name},
            order: {
                name: 'ASC'
            }
        })
        return squad;
    }
}

export { SquadRepository }