import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RegistrationService } from './services/registration.service';
import { AlertifyService } from './services/alertify.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private registrationService:RegistrationService,
        private alertifyService:AlertifyService,
        private router:Router) {}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
        let logged = this.registrationService.isLoggedIn();
        if(logged) {
            return true
        }
        this.router.navigate(['login'])
     }

}