import { User } from '../user/user';

export class UserProfile {

  public id?: number;
  public position: number;
  public department: number;
  public salary?: number;
  public user?: User;

  public constructor(id: number, position: number, department: number, salary: number, user: User){
    this.id = id;
    this.position =  position;
    this.salary = salary;
    this.user = user;
  }

  // set username(username: string) {
  //   this.user.username = username;
  // }

  get username(): string {
    return this.user.username;
  }

  set first_name(first_name: string) {
    this.user.first_name = first_name;
  }

  get first_name(): string {
    return this.user.first_name;
  }

  set last_name(last_name: string) {
    this.user.last_name = last_name;
  }

  get last_name(): string {
    return this.user.last_name;
  }

  set email(email: string) {
    this.user.email = email;
  }

  get email(): string {
    return this.user.email;
  }

}