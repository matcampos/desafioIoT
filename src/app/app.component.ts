import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Adal4Service } from 'adal-angular4';
import { LoginPage } from '../pages/login/login';

const config: adal.Config = {
    tenant: 'fcamara.com.br',
    clientId: '89ac44d9-c1c9-40e5-b747-946dd68c2098',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = LoginPage;
  

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private adalService: Adal4Service) {
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
        this.adalService.init(config);
    });
  }
}

