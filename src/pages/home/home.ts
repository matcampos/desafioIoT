import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams  } from 'ionic-angular';
import * as moment from 'moment';
import { NotificationPage } from '../notification/notification';
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
  status: [string,string,string,string,string,string,string,string,string,string] = ["","","","","","","","","",""];
  tempo: string;
  hours: [string,string,string,string,string,string,string,string,string,string] = ["","","","","","","","","",""];
  minutes: [string,string,string,string,string,string,string,string,string,string] =  ["","","","","","","","","",""];

  ngOnInit() {
    this.showContent = false;
    this.http
      .get('https://raspbarry-78187.firebaseio.com/toilets.json')
      .subscribe(res => {
        this.data = res;
        // console.log(this.data);
        this.data = JSON.parse(this.data._body);
        // console.log(this.data);
        this.aionViewDidLoad1(this.data.toilet1);
        this.aionViewDidLoad2(this.data.toilet2);
        this.aionViewDidLoad3(this.data.toilet3);
        this.aionViewDidLoad4(this.data.toilet4);
        
        this.showContent = true;
      }, err => { console.log(err) })
    this.autoRefresh();
  
  }

  aionViewDidLoad1(info) {
    // Actual date
    this.actualDate = moment().toDate();
    // Bathroom time 
    var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateToilet.setUTCSeconds(info.timestamp);
    //Subtract actualDate - dateToilet
    var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
    //Calculating hours
    let calcHours: number = (calcTime / 1000 / 60 / 60) - 3;
    // console.log(calcHours);
    //Calculating minutes
    var dateNow = 60 * calcHours;
    //Show the first characters of hour on the view
    this.hours[0] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));
    
    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[0]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[0] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[0] = "Disponível";
    }
    else {
      this.status[0] = "Ocupado";
    }

  }
  aionViewDidLoad2(info) {
    // Actual date
    this.actualDate = moment().toDate();
    // Bathroom time 
    var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateToilet.setUTCSeconds(info.timestamp);
    //Subtract actualDate - dateToilet
    var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
    //Calculating hours
    let calcHours: number = (calcTime / 1000 / 60 / 60) - 3;
    // console.log(calcHours);
    //Calculating minutes
    var dateNow = 60 * calcHours;
    //Show the first characters of hour on the view
    this.hours[1] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));
    
    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[1]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[1] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[1] = "Disponível";
    }
    else {
      this.status[1] = "Ocupado";
    }
  }

  aionViewDidLoad3(info) {
    // Actual date
    this.actualDate = moment().toDate();
    // Bathroom time 
    var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateToilet.setUTCSeconds(info.timestamp);
    //Subtract actualDate - dateToilet
    var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
    //Calculating hours
    let calcHours: number = (calcTime / 1000 / 60 / 60) - 3;
    // console.log(calcHours);
    //Calculating minutes
    var dateNow = 60 * calcHours;
    //Show the first characters of hour on the view
    this.hours[2] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));
    
    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[2]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[2] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[2] = "Disponível";
    }
    else {
      this.status[2] = "Ocupado";
    }
  }

  aionViewDidLoad4(info) {
    // Actual date
    this.actualDate = moment().toDate();
    // Bathroom time 
    var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
    dateToilet.setUTCSeconds(info.timestamp);
    //Subtract actualDate - dateToilet
    var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
    //Calculating hours
    let calcHours: number = (calcTime / 1000 / 60 / 60) - 3;
    // console.log(calcHours);
    //Calculating minutes
    var dateNow = 60 * calcHours;
    //Show the first characters of hour on the view
    this.hours[3] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));
    
    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[3]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[3] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[3] = "Disponível";
    }
    else {
      this.status[3] = "Ocupado";
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


  // logout() {
  //   this.adalService.logOut();
  // }
}
