import { ISquadDTO } from "../../modules/squad/dtos/ISquadDTO";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { AppError } from "../../shared/errors/AppError";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";

let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory

describe("Create Squad", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
    });

    it("should be able to create a new squad", async () => {

        const squad: ISquadDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }

        await createSquadUseCase.execute(squad)
        const squadCreated = await squadRepositoryInMemory.findByName(squad.name);

        expect(squadCreated).toHaveProperty("id")
    })

    it("should not be able to create a new squad with name exists", async () => {

        expect(async () => {
            const squad: ISquadDTO = {
                id: '29d2b86a-0679-11ec-9a03-0242ac130003',
                name: 'Backend',
            }
            await createSquadUseCase.execute(squad);

            await createSquadUseCase.execute(squad);
        }).rejects.toBeInstanceOf(AppError)
    })

})