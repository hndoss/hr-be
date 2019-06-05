export class Department {

    private _id?: number;
    private _name?: string;
    private _description?: string;

    public constructor(id: number, name: string, description: string){
        this._id = id;
        this._name = name;
        this._description = description;
    }

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set description(description: string) {
        this._description = description;
    }

    get description(): string {
        return this._description;
    }
}