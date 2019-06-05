export class User {

    private _id?: number;
    private _username?: string;
    private _firstName: string;
    private _lastName?: string;
    private _email?: string;

    constructor(id: number, username: string, firstname: string, lastname: string, email: string){
        this._id = id;
        this._username = username;
        this._firstName = firstname;
        this._lastName = lastname;
        this._email = email;
    }

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set username(username: string) {
        this._username = username;
    }

    get username(): string {
        return this._username;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set lastName(lastName: string) {
        this.lastName = lastName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set email(email: string) {
        this.email = email;
    }

    get email(): string {
        return this._email;
    }

}