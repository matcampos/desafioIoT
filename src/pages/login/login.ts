import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Adal4Service } from 'adal-angular4';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private adalService: Adal4Service) {
    }
    
    ngOnInit() {
      let token = sessionStorage.getItem("adal.idtoken");
      if(token) {
        this.navCtrl.setRoot(HomePage);
      }
    }

    // ionViewDidEnter() {
    //   this.adalService.handleWindowCallback();
    //   this.adalService.loginInProgress();
    // }
    
    loginOffice365() {
      this.adalService.handleWindowCallback();
      if (!this.adalService.userInfo.authenticated) {
        this.adalService.login();
      }
      
    }
}
