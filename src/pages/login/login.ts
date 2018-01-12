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
    
    token: any;
    
    ngOnInit() {
      this.token = sessionStorage.getItem("adal.idtoken");
      if(this.token) {
        this.navCtrl.setRoot(HomePage);
      }
    }

    ionViewDidEnter() {
      this.teste()
      .then(res => console.log(res))
      .catch(erro => console.log(erro));
    }

    async teste() {
      let success;
      let userInfo
      this.adalService.handleWindowCallback();
      if (!this.adalService.userInfo.authenticated) {
        success = await this.adalService.login();
      } 
      // console.log(this.adalService.userInfo)
      localStorage.setItem('userName',this.adalService.userInfo.profile.name );
      localStorage.setItem('userEmail',this.adalService.userInfo.username );
      return success;
    }

    loginOffice365() {
        this.teste()
        .then(res => console.log(res))
        .catch(erro => console.log(erro));
    }
}
