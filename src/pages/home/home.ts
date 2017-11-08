import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public http: Http) {
  }
  data
  data1 = { "available": true, "timestamp": 310065830 };
  data2 = { "available": true, "timestamp": 1518065830 };
  showContent: boolean = false;
  status: string;
  tempo: string;


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
    this.autoRefresh();
  }

  aionViewDidLoad(info) {
    console.log(info);
    if (info.available == true) {
      this.status = "Disponível";
    }
    else {
      this.status = "Ocupado";
    }
  }

  doRefresh(refresher) {
    this.ngOnInit();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  autoRefresh() {
    setTimeout(() =>{
      this.ngOnInit();
      console.log("refreshou")
    }, 10000);
  }
}
