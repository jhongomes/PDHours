import { ISquadDTO } from "../../modules/squad/dtos/ISquadDTO";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";
import { UpdateSquadUseCase } from "../../modules/squad/useCases/update/SquadUseCase";

let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory
let updateSquadUseCase: UpdateSquadUseCase

describe("Update Squad", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory();
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory);
        updateSquadUseCase = new UpdateSquadUseCase(squadRepositoryInMemory)
    })

    it("Should be able to update one hub", async () => {
        const squad: ISquadDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad);

        const findSquad = await squadRepositoryInMemory.findById(squad.id)

        const updateSquad = await updateSquadUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: "Backend engineering"
        });

        expect(updateSquad.name).toBe("Backend engineering")
    })

})