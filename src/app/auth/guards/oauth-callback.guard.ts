// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { Adal4Service } from 'adal-angular4';
// import { AuthService } from '../../services/auth.service';
// import { UserInfoModel } from '../../models/user-info.model';

// @Injectable()

// export class OAuthCallbackHandler implements CanActivate {

//     constructor(
//         private router: Router,
//         private adalService: Adal4Service,
//         private authService: AuthService) {

//     }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         this.adalService.handleWindowCallback();
//         if (this.adalService.userInfo) {
//             var returnUrl = route.queryParams['returnUrl'];
//             if (!returnUrl) {
//                 this.router.navigate(['']);
//             } else {
//                 this.router.navigate([returnUrl], { queryParams: route.queryParams });
//             }
            
//             var token = `JWT ${this.adalService.userInfo.token}`;
//             var userInfo = new UserInfoModel();
//             userInfo.loadInfoOffice365(this.adalService.userInfo);
//             this.authService.storeUserData(token, userInfo);
//         }
//         else {
//             this.router.navigate(['login']);
//             this.authService.logout();
//         }
//         return false;
//     }

// } 