import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmployeeUseCase } from "./EmployeeUseCase";

class CreateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, estimatedHours, squadId } = request.body;

        const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);
        const employee = await createEmployeeUseCase.execute({
            name,
            estimatedHours,
            squadId
        });

        return response.status(201).json(employee);

    }
}

export { CreateEmployeeController }