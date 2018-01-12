import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Adal4Service } from 'adal-angular4';
import { AuthService } from '../../services/auth.service';
import { UserInfoModel } from '../../../models/user-info-model';
const config: adal.Config = {
    tenant: 'fcamara.com.br',
    clientId: '254d3715-51c8-4d72-a65a-af7c716563e2',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
  }
@Injectable()

export class OAuthCallbackHandler implements CanActivate {

    constructor(
        private router: Router,
        private adalService: Adal4Service,
        private authService: AuthService) {
            this.adalService.init(config);

    }
s
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.adalService.handleWindowCallback();
        if (this.adalService.userInfo) {
            var returnUrl = route.queryParams['returnUrl'];
            if (!returnUrl) {
                this.router.navigate(['']);
            } else {
                this.router.navigate([returnUrl], { queryParams: route.queryParams });
            }
            var userInfo = new UserInfoModel();
            userInfo.loadInfoOffice365(this.adalService.userInfo);
            this.authService.storeUserData(userInfo);
        }
        return false;
    }

} 