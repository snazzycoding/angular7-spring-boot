import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: NbAuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().toPromise().then(
            (authenticated: boolean) => {
                if (authenticated && state.url && state.url.indexOf('/auth') >= 0) {
                    this.router.navigate(['pages/dashboard']);
                    return true;
                } else if (!authenticated && state.url && state.url.indexOf('/auth') < 0) {
                    this.router.navigate(['auth/login']);
                    return true;
                } else if (!authenticated && state.url && state.url.indexOf('/auth') >= 0) {
                    return true;
                }
                return authenticated;
            }
        );
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().toPromise().then(
            (authenticated: boolean) => {
                if (authenticated && state.url && state.url.indexOf('/auth') >= 0) {
                    this.router.navigate(['pages/dashboard']);
                    return true;
                } else if (!authenticated && state.url && state.url.indexOf('/auth') < 0) {
                    this.router.navigate(['auth/login']);
                    return true;
                } else if (!authenticated && state.url && state.url.indexOf('/auth') >= 0) {
                    return true;
                }
                return authenticated;
            }
        );
    }
}
