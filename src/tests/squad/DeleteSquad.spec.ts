import { ISquadDTO } from "../../modules/squad/dtos/ISquadDTO";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";
import { DeleteSquadUseCase } from "../../modules/squad/useCases/delete/SquadUseCase";

let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let deleteSquadUseCase: DeleteSquadUseCase

describe("Delete a squad", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory()
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
        deleteSquadUseCase = new DeleteSquadUseCase(squadRepositoryInMemory)
    })

    it("Should be able to exclude one squad", async () => {
        const squad: ISquadDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad)

        const findId = await deleteSquadUseCase.execute(squad.id)
        expect(findId).toBe(undefined)
    })
})