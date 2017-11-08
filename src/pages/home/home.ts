import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {
  }
  data1 = { "available": true, "timestamp": 310065830 };
  data2 = { "available": true, "timestamp": 1518065830 };
  showContent: boolean = false;
  status: string;
  tempo: string;


  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {

    if (this.data1.available == true) {
      this.showContent = true;
      this.status = "Disponível";
      this.tempo = this.data1.timestamp.toString();
      if (this.tempo.length == 10){
        this.tempo = this.tempo.substring(0,2);
      }
      if (this.tempo.length == 9){
        this.tempo = this.tempo.substring(0,1);
      }
    }
    else {
      this.status = "Ocupado";
      this.showContent = true;
    }
    console.log(status);
  }

  doRefresh(refresher) {
    this.showContent = false;
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    this.showContent = true;
  }
}
