import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.apiUrl + "users";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res ? res : [];
  }

  public validateUser(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(map(this.extractData));
  }
}
