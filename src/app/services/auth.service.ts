import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Adal4Service } from 'adal-angular4';
import { UserInfoModel } from "../../models/user-info-model";
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

  storeUserData( userInfoModel: UserInfoModel) {
		localStorage.setItem('userInfo', JSON.stringify(userInfoModel));
    console.log(userInfoModel)
	}
}