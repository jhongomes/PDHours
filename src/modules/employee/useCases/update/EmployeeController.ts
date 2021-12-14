import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateEmployeeUseCase } from "./EmployeeUseCase";

class UpdateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, estimatedHours, squadId } = request.body;

        const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase)

        const updateEmployee = await updateEmployeeUseCase.execute({
            id,
            name,
            estimatedHours,
            squadId
        })
        return response.json(updateEmployee);
    }
}

export { UpdateEmployeeController };