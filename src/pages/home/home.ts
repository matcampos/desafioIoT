import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  data1 = { "available": false, "timestamp": 1510065830 };
  data2 = { "available": true, "timestamp": 1518065830 };

  showContent: boolean = false;
  status: string;
  tempo: number;
  ionViewDidLoad() {
    if (this.data1.available) {
      status = "Disponível";
      this.showContent = true;
    }
    else {
      status = "Ocupado";
      this.showContent = true;
    }
  }
}
