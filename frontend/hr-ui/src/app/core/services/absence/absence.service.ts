import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../../models/absence/absence';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl = environment.apiUrl + "hr/absences/";

  constructor(private http: HttpClient) { }

  public saveAbsence(absence: Absence){
    this.http.post(this.apiUrl, JSON.stringify(absence))
      .subscribe(data  => {
          console.log("POST Request is successful ", data);
        },
        error  => {console.log("Error", error);}
    );
  }

  public getAbsences(): Observable<Absence[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let absences: Absence[] = [];
          res.forEach(object => {
            let absence = new Absence(object.requester, object.state, object.kind, object.start, object.ending);
            absence.id = object.id;

            absences.push(absence)
          });
          return absences;
        })
      );
  }

  public getAbsence(id: number): Observable<Absence> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {
          const absence = new Absence( res.requester, res.state, res.kind, res.start, res.ending);
          absence.id = res.id;
          return absence;
        })
      );
  }

  public updateAbsence(absence: Absence) {
    this.http.patch(`${this.apiUrl}/${absence.id}/`, JSON.stringify(absence))
      .subscribe(response => {
        console.log("UPDATE Request is successful ", response);
      },
        error => { console.log("Error", error); }
      );
  }
}