import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }
  data
  data1 = { "available": true, "timestamp": 310065830 };
  data2 = { "available": true, "timestamp": 1518065830 };
  showContent: boolean = false;
  status: string;
  tempo: string;
  toilet: string;

  ngOnInit() {
    this.showContent = false;
      this.http
        .get('https://raspbarry-78187.firebaseio.com/toilets.json')
        .subscribe(res => {
          this.data = res;
          console.log(this.data);
          this.data = JSON.parse(this.data._body);
          console.log(this.data);          
          this.aionViewDidLoad(this.data.toilet1);
          this.showContent = true;
        }, err => { console.log(err) })
  }

  aionViewDidLoad(info) {
    console.log(info);
    if (info.available == true) {
      this.status = "Disponível";
      this.tempo = this.data1.timestamp.toString();
      if (this.tempo.length == 10) {
        this.tempo = this.tempo.substring(0, 2);
      }
      if (this.tempo.length == 9) {
        this.tempo = this.tempo.substring(0, 1);
      }
    }
    else {
      this.status = "Ocupado";
    }
    console.log(status);
  }

  doRefresh(refresher) {
    this.ngOnInit();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);

    setTimeout(() =>{
      this.doRefresh(refresher);
      console.log('esperou, atualizou');
    }, 10000);
  }

  unread(toilet){
    this.navCtrl.push(NotificationPage, {param:toilet});
  }
}
