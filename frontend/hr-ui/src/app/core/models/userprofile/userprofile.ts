import { User } from '../user/user';

export class UserProfile {

  private _id?: number;
  private _positionId: number;
  private _salary?: number;
  private _user?: User;

  public constructor(id: number, position: number, salary: number, user: User){
    this._id = id;
    this._positionId =  position;
    this._salary = salary;
    this._user = user;
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set positionId(positionId: number) {
    this._positionId = positionId;
  }

  get positionId(): number {
    return this._positionId;
  }

  set salary(salary: number) {
    this.salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set user(user: User) {
    this.user = user;
  }

  get user(): User {
    return this._user;
  }

  set username(username: string) {
    this._user.username = username;
  }

  get username(): string {
    return this._user.username;
  }

  set firstName(firstName: string) {
    this._user.firstName = firstName;
  }

  get firstName(): string {
    return this._user.firstName;
  }

  set lastName(lastName: string) {
    this._user.lastName = lastName;
  }

  get lastName(): string {
    return this._user.lastName;
  }

  set email(email: string) {
    this._user.email = email;
  }

  get email(): string {
    return this._user.email;
  }

}