import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Adal4Service } from 'adal-angular4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  constructor(
    public navCtrl: NavController,
    private adalService: Adal4Service) {

  }

  ngOnInit() {
    // this.adalService.handleWindowCallback();
  }

  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  j = 0;
  k = 0;
  l = 0;

  color = [["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"],["secondary","danger","danger","darkFC"]];
  icon = [["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"],["happy","lock","warning","medkit"]];
  onClick(){
    this.a = Math.floor(Math.random() * 4);
  }
  onClick2(){
    this.b = Math.floor(Math.random() * 4);
  }
  onClick3(){
    this.c = Math.floor(Math.random() * 4);
  }
  onClick4(){
    this.d = Math.floor(Math.random() * 4);
  }
  onClick5(){
    this.e = Math.floor(Math.random() * 4);
  }
  onClick6(){
    this.f = Math.floor(Math.random() * 4);
  }
  onClick7(){
    this.g = Math.floor(Math.random() * 4);
  }
  onClick8(){
    this.h = Math.floor(Math.random() * 4);
  }
  onClick9(){
    this.i = Math.floor(Math.random() * 4);
  }
  onClick10(){
    this.j = Math.floor(Math.random() * 4);
  }
  onClick11(){
    this.k = Math.floor(Math.random() * 4);
  }
  onClick12(){
    this.l = Math.floor(Math.random() * 4);
  }


  // logout() {
  //   this.adalService.logOut();
  // }
}
