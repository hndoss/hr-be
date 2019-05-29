import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(){
    // if (this.authService.isAuthenticated()) {
    //     return true;
    // }
    console.log("guarding.")
    this.router.navigate(['/login']);
    return false;
  }

}