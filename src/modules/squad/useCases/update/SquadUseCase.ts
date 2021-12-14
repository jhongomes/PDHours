import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISquadDTO } from "../../dtos/ISquadDTO";
import { Squad } from "../../infra/entities/Squad";
import { ISquadRepository } from "../../repositories/ISquadRepository";

@injectable()
class UpdateSquadUseCase {
    constructor(
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository) { }

    async execute({
        id,
        name
    }: ISquadDTO): Promise<Squad> {
        const squad = await this.squadRepository.findById(id);

        if (!squad) throw new AppError("Squad does not exists!");

        squad.name = name;

        const updateSquad = await this.squadRepository.Update(squad);

        return updateSquad;

    }
}

export { UpdateSquadUseCase }