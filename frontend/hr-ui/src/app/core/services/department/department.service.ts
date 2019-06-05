import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../models/department/department';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = environment.apiUrl + "hr/departments";

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let departments : Department[] = [];
          res.forEach(object => {
            departments.push(new Department(object.id, object.name, object.description))
          });
          return departments;
        })
      );
  }

  public getDepartment(id: number): Observable<Department> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {
          let department = new Department(res.id, res.name, res.description);
          return department;
        })
      );
  }
}