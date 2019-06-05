export class User {

    public id?: number;
    public username?: string;
    public first_name: string;
    public last_name?: string;
    public email?: string;

    constructor(id: number, username: string, firstname: string, lastname: string, email: string){
        this.id = id;
        this.username = username;
        this.first_name = firstname;
        this.last_name = lastname;
        this.email = email;
    }
}