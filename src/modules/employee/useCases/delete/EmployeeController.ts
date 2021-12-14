import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteEmployeeUseCase } from "./EmployeeUseCase";

class DeleteEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);

        await deleteEmployeeUseCase.execute(id);

        return response.sendStatus(200)
    }
}
export { DeleteEmployeeController }