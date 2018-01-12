import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from '../../services/auth.service';
import { Adal4Service } from 'adal-angular4';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        private adalService: Adal4Service) { }

    canActivate(): Observable<boolean> | boolean {

        if (localStorage.getItem('email') == null || localStorage.getItem('email') == '') {
            localStorage.setItem('email', this.adalService.userInfo.username)

            console.log(localStorage.getItem('email'));
        } else {

            return false;
        }

    }

}