export class Absence {
    public id?: number
    public requester?: number
    public state?: string
    public kind?: string
    public start?: string
    public ending?: string

    public constructor(requester: number, state: string, kind: string, start: string, ending: string){
        this.requester = requester;
        this.state = state;
        this.kind = kind;
        this.start = start;
        this.ending = ending;
    }
}