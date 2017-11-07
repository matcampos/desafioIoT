import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

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
  icon = [["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"],["happy","icon-poo","warning","icon-skull"]];
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
}
