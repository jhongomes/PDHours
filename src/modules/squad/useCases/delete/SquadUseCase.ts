import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISquadRepository } from "../../repositories/ISquadRepository";

@injectable()
class DeleteSquadUseCase {
    constructor(
        @inject("SquadRepository")
        private readonly squadRepository: ISquadRepository) { }

    async execute(id: string): Promise<void> {
        const squad = await this.squadRepository.findById(id)

        if (!squad) {
            throw new AppError("Squad does not exists!")
        }
        await this.squadRepository.Delete(squad);
    }
}
export { DeleteSquadUseCase }