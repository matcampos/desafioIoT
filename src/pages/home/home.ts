import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { NotificationPage } from '../notification/notification';
import { Observable } from 'rxjs/Observable';
moment.locale('pt-BR');
declare var $:any;
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
  status: [string, string, string, string, string, string, string, string, string, string] = ["", "", "", "", "", "", "", "", "", ""];
  tempo: string;
  hours: [string, string, string, string, string, string, string, string, string, string] = ["", "", "", "", "", "", "", "", "", ""];
  minutes: [string, string, string, string, string, string, string, string, string, string] = ["", "", "", "", "", "", "", "", "", ""];

  ngOnInit() {

  
    let observable = new Observable(observer => {
      this.getData()

    })

    return  this.getData();



    //   $( document ).ready(function() {
    //     //$(window).on('resize', hexagonalPattern);

    //     hexagonalPattern();

    //     function hexagonalPattern() {
    //         var width = $('.container').width();
    //         var $item = $('.hexa');
    //         var itemWidth = $item.width()*2;
    //         var margin = 1;
    //         var rowLength = Math.floor(width / (itemWidth*3/4+1));
    
    //         var itemLength = $item.length;
    //         var patternLength = Math.floor(itemLength/rowLength);
    //         var currentRow = 1;
    
    //         $item.each(function(index) {
    //             $(this).removeClass('top');
    //             if(index+1 > currentRow*rowLength){
    //             currentRow++;
    //             }
            
    //             var indexRow = index+1 - (currentRow-1)*rowLength;
    
    //             if(indexRow%2 == 0) {
    //             $(this).addClass('top');
    //             }
    //         });
    //     }            
    // });
  }

  getData(){
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
      this.aionViewDidLoad5(this.data.toilet5);
      this.aionViewDidLoad6(this.data.toilet6);
      this.aionViewDidLoad7(this.data.toilet7);
      this.aionViewDidLoad8(this.data.toilet8);
      this.aionViewDidLoad9(this.data.toilet9);
      this.aionViewDidLoad10(this.data.toilet10);
      this.aionViewDidLoad11(this.data.toilet11);
      this.aionViewDidLoad12(this.data.toilet12);

      this.showContent = true;
      this.autoRefresh()
    }, err => { console.log(err) })

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
    // console.log(this.status[0])

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

  aionViewDidLoad5(info) {
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
    this.hours[4] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[4]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[4] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[4] = "Disponível";
    }
    else {
      this.status[4] = "Ocupado";
    }
  }

  aionViewDidLoad6(info) {
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
    this.hours[5] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[5]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[5] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[5] = "Disponível";
    }
    else {
      this.status[5] = "Ocupado";
    }
  }

  aionViewDidLoad7(info) {
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
    this.hours[6] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[6]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[6] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[6] = "Disponível";
    }
    else {
      this.status[6] = "Ocupado";
    }
  }

  aionViewDidLoad8(info) {
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
    this.hours[7] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[7]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[7] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[7] = "Disponível";
    }
    else {
      this.status[7] = "Ocupado";
    }
  }

  aionViewDidLoad9(info) {
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
    this.hours[8] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[8]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[8] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[8] = "Disponível";
    }
    else {
      this.status[8] = "Ocupado";
    }
  }

  aionViewDidLoad10(info) {
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
    this.hours[9] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[9]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[9] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[9] = "Disponível";
    }
    else {
      this.status[9] = "Ocupado";
    }
  }

  aionViewDidLoad11(info) {
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
    this.hours[10] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[10]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[10] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[10] = "Disponível";
    }
    else {
      this.status[10] = "Ocupado";
    }
  }

  aionViewDidLoad12(info) {
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
    this.hours[11] = calcHours.toString().substring(0, calcHours.toString().indexOf("."));

    if (calcHours > 1) {
      dateNow = dateNow - (Number.parseInt(this.hours[11]) * 60);
    }
    //Show the first characters of minutes on the view
    this.minutes[11] = dateNow.toFixed(0);

    if (info.available == true) {
      this.status[11] = "Disponível";
    }
    else {
      this.status[11] = "Ocupado";
    }
  }
  doRefresh(refresher) {
    this.ngOnInit();
    // console.log('Begin async operation', refresher);

    setTimeout(() => {
      // console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  autoRefresh() {
    setTimeout(() => {
  this.getData()
      // console.log("refreshou")
    }, 10000);
  }

  unread(toilet) {
    this.navCtrl.push(NotificationPage, { param: toilet });
  }


  



  // logout() {
  //   this.adalService.logOut();
  // }
}
