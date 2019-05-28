import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Employee } from '../../models/employee/employee';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiUrl = environment.apiUrl + "employee";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res ? res : [];
  }

  public getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(map(this.extractData));
  }

  public saveEmployee(employee: Employee) {
    this.http.post(this.apiUrl, JSON.stringify(employee), this.httpOptions)
      .subscribe(data => {
        console.log("POST Request is successful ", data);
      },
        error => { console.log("Error", error); }
      );
  }

  public updateEmployee(employee) {
    this.http.put(this.apiUrl + '/' + employee.id, JSON.stringify(employee), this.httpOptions)
      .subscribe(data => {
        console.log("UPDATE Request is successful ", data);
      },
        error => { console.log("Error", error); }
      );
  }

  public deleteEmployee(id) {
    this.http.delete<any>(this.apiUrl + '/' + id, this.httpOptions)
      .subscribe(data => {
        console.log("DELETE Request is successful ", data);
      },
        error => { console.log("Error", error); }
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}


