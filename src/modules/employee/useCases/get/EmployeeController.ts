import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetAllEmployeeUseCase, GetEmployeeUseCase } from "./EmployeeUseCase";

class GetEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getEmployeeUseCase = container.resolve(GetEmployeeUseCase);

        const employee = await getEmployeeUseCase.execute(id);

        if(!employee){
            throw new AppError("Employee does not exist!")
        }

        return response.json(employee);
    }
}

class GetAllEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllEmployeeUseCase = container.resolve(GetAllEmployeeUseCase)

        const employee = await getAllEmployeeUseCase.execute()

        return response.json(employee);
    }
}

export { GetEmployeeController, GetAllEmployeeController }