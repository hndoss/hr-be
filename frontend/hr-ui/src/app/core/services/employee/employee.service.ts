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
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let employees : UserProfile[] = [];
          res.forEach(object => {
            let user = new User(object.user.id, object.user.username, 
              object.user.first_name, object.user.last_name, object.user.email);

            employees.push(new UserProfile(object.id, object.positionId, object.departmentId,object.salary, user))
          });
          return employees;
        })
      );
  }

  public getEmployee(id: number): Observable<UserProfile> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {

          let user = new User(res.user.id, res.user.username, res.user.first_name, 
            res.user.last_name, res.user.email);

          let employee = new UserProfile(res.id, res.positionId, res.departmentId, res.salary, user);
          return employee;
        })
      );
  }

  public updateEmployee(user: UserProfile){
    delete user.user;
    this.http.patch(`${this.apiUrl}/${user.id}/`, JSON.stringify(user))
      .subscribe(response  => {
          console.log("UPDATE Request is successful ", response);
        },
        error  => {console.log("Error", error);}
    );
  }
}