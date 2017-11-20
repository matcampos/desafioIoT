import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Adal4Service } from 'adal-angular4';

@Injectable()
export class AuthService {

  constructor(
      public http: Http,
      private adalService: Adal4Service) {
    console.log('Hello Auth Provider');
  }

  login() {
    this.adalService.login();
  }
}