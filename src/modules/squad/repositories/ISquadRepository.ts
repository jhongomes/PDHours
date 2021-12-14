import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Squad } from "../infra/entities/Squad";

export interface ISquadRepository extends IBaseRepository<Squad> {
    get(): Promise<Squad[]>;
    findByName(name: string): Promise<Squad>
    findById(id: string): Promise<Squad>
}   