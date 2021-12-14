import { EntityTarget, getRepository, Repository } from "typeorm";
import { IBaseRepository } from "./IBaseRepository";

class BaseRepository<T> implements IBaseRepository<T> {
    protected readonly repository: Repository<T>;

    constructor(entity: EntityTarget<T>) {
        this.repository = getRepository(entity);
    }

    public async Get(): Promise<T[]> {
        const entityGet = await this.repository.find()
        return entityGet
    }

    public async Create(entity: T): Promise<T> {
        const entityCreate = this.repository.create(entity)
        await this.repository.save(entity)

        return entityCreate
    }

    public async Update(entity: T): Promise<T> {
        const entityUpdate = await this.repository.save(entity);
        return entityUpdate;
    }

    public async Delete(entity: T): Promise<void> {
        await this.repository.remove(entity);

    }

}
export { BaseRepository }