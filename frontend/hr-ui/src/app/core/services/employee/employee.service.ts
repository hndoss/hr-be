import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { UserProfile } from '../../models/userprofile/userprofile';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiUrl = environment.apiUrl + "hr/users";

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.apiUrl)
      .pipe(
        map(res => {
          let employees : UserProfile[];
          employees = [];

          res.forEach(object => {
            let user = new User(object.user.id, object.user.username, 
              object.user.firstName, object.user.lastName, object.user.email);
              
            employees.push(new UserProfile(object.id, object.positionId, object.salary, user))
          });
          return employees;
        })
      );

  }

  public getEmployee(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {
          let user = new User(res.id, res.username, res.firstName, res.lastName, res.email);
          let employee = new UserProfile(res.id, res.positionId, res.salary, user);
          return employee
        })
      );
  }

  private buildUser(json: any): User{
    return new User();
  }

}