import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + "auth";
  private token: string;
  private user: any;
  
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {  }

  public getToken(){
    return localStorage.getItem('token');
  }
  
  public hasPermission(routeRoles: Array<String>){
    if(this.user)
      return !!this.user.roles.find((role) => {
        return routeRoles.indexOf(role) > -1;
      })

    return false;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(username:string, password:string) {
    this.http.post<{token: string}>(`${this.apiUrl}/login`, {username, password})
      .subscribe(res => {
          localStorage.setItem('token', res.token);
          this.token = res.token;
          this.user = this.jwtHelper.decodeToken(this.token)
          console.log("authenticated");
          console.log(this.user);
      },
        error => { 
          console.log("Error", error); 
        }
      );
  }
}
