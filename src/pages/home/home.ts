import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
moment.locale('pt-BR');

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
  actualDate: Date;
  dateToilet: Date;
  showContent: boolean = false;
  status: string;
  tempo: string;
  hours: string;
  minutes: string;

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
    // Actual date
    this.actualDate = moment().toDate();
    // Bathroom time 
    var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateToilet.setUTCSeconds(info.timestamp);
    //Subtract actualDate - dateToilet
    var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
    //Calculating hours
    let calcHours: number = (calcTime / 1000 / 60 / 60) - 3;
    console.log(calcHours);
    //Calculating minutes
    var dateNow = 60 * calcHours;
    //Show the first characters of hour on the view
    this.hours = calcHours.toString().substring(0, calcHours.toString().indexOf("."));
    
    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours) * 60);
    }
    //Show the first characters of minutes on the view


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
    setTimeout(() => {
      this.ngOnInit();
      console.log("refreshou")
    }, 10000);
  }

  unread(toilet){
    this.navCtrl.push(NotificationPage, {param:toilet});
  }
}
