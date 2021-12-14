import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteSquadUseCase } from "./SquadUseCase";

class DeleteSquadController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteSquadUseCase = container.resolve(DeleteSquadUseCase);

        await deleteSquadUseCase.execute(id);

        return response.sendStatus(200)
    }
}
export { DeleteSquadController }