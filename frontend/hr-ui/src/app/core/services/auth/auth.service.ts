import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + "auth";

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  public getUser() {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public hasPermission(routeRoles: Array<String>) {
    const user = this.getUser();

    if (user)
      return !!user.roles.find((role) => {
        return routeRoles.indexOf(role) > -1;
      })

    return false;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
      .subscribe(res => {
        localStorage.setItem('token', res.token);
      },
        error => {
          console.log("Error", error);
        }
      );
  }

  public logout(){
    localStorage.removeItem('token');
  }
}
