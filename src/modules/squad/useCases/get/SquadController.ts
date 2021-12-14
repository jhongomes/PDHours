import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetAllSquadUseCase, GetSquadUseCase } from "./SquadUseCase";

class GetSquadController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.params;

        const getSquadUseCase = container.resolve(GetSquadUseCase);

        const squad = await getSquadUseCase.execute(name);

        if (!squad) throw new AppError("Squad name does not exist!")

        return response.json(squad);
    }
}

class GetAllSquadController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllSquadUseCase = container.resolve(GetAllSquadUseCase)

        const squad = await getAllSquadUseCase.execute()

        return response.json(squad);
    }
}

export { GetSquadController, GetAllSquadController }