export interface IQuestRepository{
    create(data:any):any
    delete(where:any):Promise<number>
    update():any
    find(where:any):any
}