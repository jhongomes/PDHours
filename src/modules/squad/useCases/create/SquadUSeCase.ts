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

        const nameAlreadyExists = await this.squadRepository.findByName(name)

        if(nameAlreadyExists) throw new AppError("squad already registered!")

        if (name == " ") throw new AppError("fill in the name!");

        Object.assign(squad, { name })

        const createSquad = await this.squadRepository.Create(squad)

        return createSquad
    }

}
export { CreateSquadUseCase }