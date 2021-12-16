import { ISquadDTO } from "../../modules/squad/dtos/ISquadDTO";
import { SquadRepositoryInMemory } from "../../modules/squad/repositories/in-memory/SquadRepositoryInMemory";
import { CreateSquadUseCase } from "../../modules/squad/useCases/create/SquadUSeCase";
import { GetAllSquadUseCase, GetSquadUseCase } from "../../modules/squad/useCases/get/SquadUseCase";

let getAllSquadUseCase: GetAllSquadUseCase
let getSquadUseCase: GetSquadUseCase
let createSquadUseCase: CreateSquadUseCase
let squadRepositoryInMemory: SquadRepositoryInMemory

describe("List all squad", () => {
    beforeEach(() => {
        squadRepositoryInMemory = new SquadRepositoryInMemory();
        createSquadUseCase = new CreateSquadUseCase(squadRepositoryInMemory)
        getAllSquadUseCase = new GetAllSquadUseCase(squadRepositoryInMemory)
        getSquadUseCase = new GetSquadUseCase(squadRepositoryInMemory)
    })

    it("Should be able to list all squad", async () => {
        const squad: ISquadDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad);

        const all = await getAllSquadUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("Should be able to findOne name squad", async () => {
        const squad: ISquadDTO = {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            name: 'Backend',
        }
        await createSquadUseCase.execute(squad);

        const findSquadName = await getSquadUseCase.execute(squad.name)

        expect(findSquadName.name).toBe('Backend')
    })
})