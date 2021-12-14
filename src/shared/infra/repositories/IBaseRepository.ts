export interface IBaseRepository<T> {

    Get(): Promise<T[]>;
    Create(entity: T): Promise<T>;
    Update(entity: T): Promise<T>;
    Delete(entity: T): Promise<void>;

}