import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateSquadUseCase } from "./SquadUseCase";

class UpdateSquadController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name } = request.body;

        const updateSquadUseCase = container.resolve(UpdateSquadUseCase)

        const updateShipping = await updateSquadUseCase.execute({
            id,
            name
        })
        return response.json(updateShipping);
    }
}

export { UpdateSquadController };