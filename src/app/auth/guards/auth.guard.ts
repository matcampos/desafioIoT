// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';

// // import { AuthService } from '../../services/auth.service';
// import { Adal4Service } from 'adal-angular4';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(
//         private authService: AuthService,
//         private router: Router,
//         private adalService: Adal4Service) { }

//     canActivate(): boolean {
//         if (this.authService.loggedIn() || this.adalService.userInfo.authenticated) {
//             return true;
//         } else {
//             this.router.navigate(['/login']);
//             return false;
//         }

           
//     }

// }