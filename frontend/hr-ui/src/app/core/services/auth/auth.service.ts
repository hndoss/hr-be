import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.apiUrl + "auth";
  private token: string;
  
  constructor(private http: HttpClient) { }
  // constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public getToken(){
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return true;
    // return !this.jwtHelper.isTokenExpired(token);
  }

  public login(username:string, password:string) {
    this.http.post<{token: string}>(`${this.apiUrl}/login`, {username, password})
      .subscribe(res => {
          localStorage.setItem('token', res.token);
          console.log(res.token);
      },
        error => { 
          console.log("Error", error); 
        }
      );
  }
}
