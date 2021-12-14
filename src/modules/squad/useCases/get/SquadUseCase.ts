import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Squad } from "../../infra/entities/Squad";
import { ISquadRepository } from "../../repositories/ISquadRepository";

@injectable()
class GetSquadUseCase {
    constructor(
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository) { }

    async execute(name: string): Promise<Squad> {
        const squad = await this.squadRepository.findByName(name)

        if (!squad) throw new AppError("squad does not exists!")

        return squad;
    }
}

@injectable()
class GetAllSquadUseCase {
    constructor(
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository) { }

    async execute(): Promise<Squad[]> {
        const squad = await this.squadRepository.get()

        return squad;
    }
}

export { GetSquadUseCase, GetAllSquadUseCase }