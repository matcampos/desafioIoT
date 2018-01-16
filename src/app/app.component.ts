import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Adal4Service } from 'adal-angular4';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

const config: adal.Config = {
    tenant: 'fcamara.com.br',
    clientId: '254d3715-51c8-4d72-a65a-af7c716563e2',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;
  

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

