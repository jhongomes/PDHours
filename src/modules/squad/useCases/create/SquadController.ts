import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSquadUseCase } from "./SquadUSeCase";

class CreateSquadController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const createSquandUseCase = container.resolve(CreateSquadUseCase);
        const squad = await createSquandUseCase.execute({
            name
        });

        return response.status(201).json(squad);

    }
}

export { CreateSquadController }