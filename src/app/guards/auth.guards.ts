import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(public auth: AuthenticationService,private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('token')) {
            // logged in so return true
             return true;
        } 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}