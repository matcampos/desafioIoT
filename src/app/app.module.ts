import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notification/notification';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { AuthService } from './services/auth.service';
import { EmailService }from '../pages/notification/email-service';
import { HttpClient } from '../pages/notification/http-client';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationPage
  ],
  providers: [
    HttpModule,
    AuthService,
    Adal4Service,
    EmailService,
    HttpClient,
    {
      provide: Adal4HTTPService,
      useFactory: Adal4HTTPService.factory,
      deps: [HttpModule, Adal4Service]
    },
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
