import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const roles = route.data.roles

    if (this.authService.isAuthenticated() && this.authService.hasPermission(roles)) {
        return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }

}