import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISquadDTO } from "../../dtos/ISquadDTO";
import { Squad } from "../../infra/entities/Squad";
import { ISquadRepository } from "../../repositories/ISquadRepository";

@injectable()
class CreateSquadUseCase {
    constructor(
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository) { }

    async execute({
        name,
    }: ISquadDTO): Promise<Squad> {
        const squad = new Squad()

        if (name == " ") {
            throw new AppError("Fill in fields!");
        }

        Object.assign(squad, {
            name
        })

        const createSquad = await this.squadRepository.Create(squad)

        return createSquad
    }

}
export { CreateSquadUseCase }