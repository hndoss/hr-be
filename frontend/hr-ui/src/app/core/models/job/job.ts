export class Job {

    public id?: number;
    public name?: string;
    public description?: string;

    public constructor(id: number, name: string, description: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }

}