webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_4_moment__["locale"]('pt-BR');
var HomePage = (function () {
    function HomePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data1 = { "available": true, "timestamp": 310065830 };
        this.data2 = { "available": true, "timestamp": 1518065830 };
        this.showContent = false;
        this.status = ["", "", "", "", "", "", "", "", "", ""];
        this.hours = ["", "", "", "", "", "", "", "", "", ""];
        this.minutes = ["", "", "", "", "", "", "", "", "", ""];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.showContent = false;
        this.http
            .get('https://raspbarry-78187.firebaseio.com/toilets.json')
            .subscribe(function (res) {
            _this.data = res;
            // console.log(this.data);
            _this.data = JSON.parse(_this.data._body);
            // console.log(this.data);
            _this.aionViewDidLoad1(_this.data.toilet1);
            _this.aionViewDidLoad2(_this.data.toilet2);
            _this.aionViewDidLoad3(_this.data.toilet3);
            _this.aionViewDidLoad4(_this.data.toilet4);
            _this.aionViewDidLoad5(_this.data.toilet5);
            _this.aionViewDidLoad6(_this.data.toilet6);
            _this.aionViewDidLoad7(_this.data.toilet7);
            _this.aionViewDidLoad8(_this.data.toilet8);
            _this.aionViewDidLoad9(_this.data.toilet9);
            _this.aionViewDidLoad10(_this.data.toilet10);
            _this.aionViewDidLoad11(_this.data.toilet11);
            _this.aionViewDidLoad12(_this.data.toilet12);
            _this.showContent = true;
        }, function (err) { console.log(err); });
        $(document).ready(function () {
            //$(window).on('resize', hexagonalPattern);
            hexagonalPattern();
            function hexagonalPattern() {
                var width = $('.container').width();
                var $item = $('.hexa');
                var itemWidth = $item.width() * 2;
                var margin = 1;
                var rowLength = Math.floor(width / (itemWidth * 3 / 4 + 1));
                var itemLength = $item.length;
                var patternLength = Math.floor(itemLength / rowLength);
                var currentRow = 1;
                $item.each(function (index) {
                    $(this).removeClass('top');
                    if (index + 1 > currentRow * rowLength) {
                        currentRow++;
                    }
                    var indexRow = index + 1 - (currentRow - 1) * rowLength;
                    if (indexRow % 2 == 0) {
                        $(this).addClass('top');
                    }
                });
            }
        });
    };
    HomePage.prototype.aionViewDidLoad1 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad2 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad3 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad4 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad5 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad6 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad7 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad8 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad9 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad10 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad11 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.aionViewDidLoad12 = function (info) {
        // Actual date
        this.actualDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toDate();
        // Bathroom time 
        var dateToilet = new Date(0); // The 0 there is the key, which sets the date to the epoch
        dateToilet.setUTCSeconds(info.timestamp);
        //Subtract actualDate - dateToilet
        var calcTime = Date.parse(this.actualDate.toString()) - Date.parse(dateToilet.toString());
        //Calculating hours
        var calcHours = (calcTime / 1000 / 60 / 60) - 3;
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
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.ngOnInit();
        // console.log('Begin async operation', refresher);
        setTimeout(function () {
            // console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    HomePage.prototype.autoRefresh = function () {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
            // console.log("refreshou")
        }, 10000);
    };
    HomePage.prototype.unread = function (toilet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */], { param: toilet });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\home\home.html"*/'<body>\n\n<ion-content padding class="cards-bathroom" (load)="autoRefresh()">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="icon-poo" pullingText="Puxe para recarregar" refreshingSpinner="circles" refreshingText="Recarregando...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n \n\n  <!-- <div class="holder">\n\n      \n\n    <ul class="container">\n\n        <li class="hexa">\n\n            <div class="front">\n\n                <img *ngIf="status[0] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n                <img *ngIf="status[0] == \'Ocupado\' && minutes[0] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n                <img *ngIf="status[0] == \'Ocupado\' && minutes[0] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/argentina.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Argentina\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[1] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[1] == \'Ocupado\' && minutes[1] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[1] == \'Ocupado\' && minutes[1] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/australia.png"  class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Austrália\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[2] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[2] == \'Ocupado\' && minutes[2] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[2] == \'Ocupado\' && minutes[2] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/brazil.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Brasil\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[3] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[3] == \'Ocupado\' && minutes[3] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[3] == \'Ocupado\' && minutes[3] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/canada.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Canadá\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[4] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[4] == \'Ocupado\' && minutes[4] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[4] == \'Ocupado\' && minutes[4] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/china.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro China\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[5] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[5] == \'Ocupado\' && minutes[5] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[5] == \'Ocupado\' && minutes[5] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/england.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Ingraterra\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[6] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[6] == \'Ocupado\' && minutes[6] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[6] == \'Ocupado\' && minutes[6] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/france.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro França\')">\n\n                    Reportar <br>Problema!\n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[7] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[7] == \'Ocupado\' && minutes[7] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[7] == \'Ocupado\' && minutes[7] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/germany.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Alemanha\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[8] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[8] == \'Ocupado\' && minutes[8] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[8] == \'Ocupado\' && minutes[8] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/italy.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Italia\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[9] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[9] == \'Ocupado\' && minutes[9] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[9] == \'Ocupado\' && minutes[9] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/japan.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Japão\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[10] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[10] == \'Ocupado\' && minutes[10] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[10] == \'Ocupado\' && minutes[10] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/portugal.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Protugal\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n        <li class="hexa">\n\n            <div class="front">\n\n              <img *ngIf="status[11] == \'Disponível\'" src="../../assets/imgs/happy-poop.svg?v=1" >\n\n              <img *ngIf="status[11] == \'Ocupado\' && minutes[11] < 15" src="../../assets/imgs/poop-pooping.svg?v=1" >\n\n              <img *ngIf="status[11] == \'Ocupado\' && minutes[11] >= 15" src="../../assets/imgs/dead-poop.svg?v=1">\n\n                <img src="../../assets/imgs/flags/united-states.png" class="flag">\n\n            </div>\n\n            <div class="back">\n\n                <button class="repor" (click)="unread(\'Banheiro Estados Unidos\')">\n\n                    Reportar <br>Problema! \n\n                </button>\n\n            </div>\n\n        </li>\n\n    </ul>\n\n</div> -->\n\n\n\n<h1><img src="../../assets/lgo-fc.png" alt="FCamara" title="FCamara"></h1>\n\n<ul id="hexGrid">\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                <img *ngIf="status[0] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                <img *ngIf="status[0] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                <img *ngIf="status[0] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                <img *ngIf="status[0] == \'Ocupado\' && minutes[0] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                <img *ngIf ="status[0] == \'Ocupado\' && minutes[0] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="../../assets/flags/argentina.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Argentina\')">\n\n                        Reportar!\n\n                    </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[1] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[1] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[1] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[1] == \'Ocupado\' && minutes[1] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[1] == \'Ocupado\' && minutes[1] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/australia.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Australia\')">\n\n                        Reportar!\n\n                    </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[2] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[2] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[2] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[2] == \'Ocupado\' && minutes[2] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[2] == \'Ocupado\' && minutes[2] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/brazil.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Brasil\')">\n\n                        Reportar!\n\n                    </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[3] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[3] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[3] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[3] == \'Ocupado\' && minutes[3] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[3] == \'Ocupado\' && minutes[3] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/canada.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Canada\')">\n\n                        Reportar!\n\n                    </button>|\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[4] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[4] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[4] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[4] == \'Ocupado\' && minutes[4] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[4] == \'Ocupado\' && minutes[4] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/china.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Clina\')">\n\n                        Reportar!\n\n                    </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[5] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[5] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[5] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[5] == \'Ocupado\' && minutes[5] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[5] == \'Ocupado\' && minutes[5] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/england.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Ingraterra\')">\n\n                        Reportar!\n\n                    </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[6] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[6] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[6] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[6] == \'Ocupado\' && minutes[6] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[6] == \'Ocupado\' && minutes[6] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/france.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro França\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[7] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[7] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[7] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[7] == \'Ocupado\' && minutes[7] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[7] == \'Ocupado\' && minutes[7] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/germany.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Alemanha\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[8] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[8] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[8] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[8] == \'Ocupado\' && minutes[8] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[8] == \'Ocupado\' && minutes[8] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/italy.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Italia\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[9] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[9] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[9] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[9] == \'Ocupado\' && minutes[9] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[9] == \'Ocupado\' && minutes[9] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/japan.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Japão\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[10] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[10] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[10] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[10] == \'Ocupado\' && minutes[10] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[10] == \'Ocupado\' && minutes[10] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/portugal.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Portugal\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n    <li class="hex">\n\n        <div class="hexIn">\n\n            <a class="hexLink" href="#">\n\n                    <img *ngIf="status[11] == \'Disponível\'" src="assets/bg-blue.png" class="image" alt="" />\n\n                    <img *ngIf="status[11] == \'Ocupado\'" src="assets/bg-red.png" class="image" alt="" />\n\n                    <img *ngIf="status[11] == \'Disponível\'" src="../../assets/free.svg?v=1" class="emoji">\n\n                    <img *ngIf="status[11] == \'Ocupado\' && minutes[11] < 15" src="assets/dead.svg?v=1" class="emoji">\n\n                    <img *ngIf ="status[11] == \'Ocupado\' && minutes[11] >= 15" src="assets/medium.svg?v=1" class="emoji">\n\n                <img src="assets/flags/united-states.png" class="flag">\n\n                <div class="hover back"></div>\n\n                <button style="background-color:#ec7b27 !important; color:white;"class="hover report" (click)="unread(\'Banheiro Estados Unidos\')">\n\n                        Reportar!\n\n                </button>\n\n            </a>\n\n        </div>\n\n    </li>\n\n</ul>\n\n\n\n</ion-content>\n\n</body>\n\n\n\n'/*ion-inline-end:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_email_model__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationPage = (function () {
    function NotificationPage(navParams, toastCtrl, sendEmailService) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.sendEmailService = sendEmailService;
        this.toiletProblem = "";
        this.problemDesc = "";
        this.problems = ["Sem papel", "Sem sabonete", "Sem luz", "Com vazamento", "Outro"];
        this.othersSelected = true;
        this.emailModel = new __WEBPACK_IMPORTED_MODULE_3__models_email_model__["a" /* EmailModel */]();
        this.param = navParams.get("param");
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.itemSelected = function (item) {
        this.selectedItem = item;
        if (item == "Outro") {
            this.othersSelected = false;
        }
        else {
            this.othersSelected = true;
        }
        // console.log(item);
    };
    NotificationPage.prototype.notifyFC = function () {
        if (this.selectedItem) {
            this.emailModel.to = "matheus.alves1998@hotmail.com";
            this.emailModel.subject = "Problema no " + this.param;
            if (this.othersSelected == true) {
                this.emailModel.text = "Reportaram que o " + this.param + " está " + this.selectedItem;
            }
            else {
                if (this.problemDesc) {
                    this.emailModel.text = "Reportaram a seguinte mensagem no " + this.param + ": " + this.problemDesc;
                }
                else {
                    var toast_1 = this.toastCtrl.create({
                        message: 'Escreva algo na descrição do problema!',
                        duration: 3000,
                        position: 'top'
                    });
                    toast_1.present();
                    return;
                }
            }
            this.sendEmailService.send(this.emailModel)
                .subscribe(function (res) {
                console.log(res);
            }, function (error) {
                console.log(error);
            });
            var toast = this.toastCtrl.create({
                message: 'Problema notificado com sucesso!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // this.navCtrl.push(HomePage);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Escolha um problema para notificar!!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notification',template:/*ion-inline-start:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\notification\notification.html"*/'<ion-header>\n\n  <ion-navbar color="orangeFC">\n\n    <ion-title>\n\n      Notificar Problema\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-col col-12>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-list col-12>\n\n          <ion-label>Qual o problema?</ion-label>\n\n          <ion-item>\n\n            <ion-select [(ngModel)]="toiletProblem" interface="action-sheet" (ionChange)="itemSelected(toiletProblem)">\n\n              <ion-option value="" selected> Selecione...</ion-option>\n\n              <ion-option *ngFor="let problem of problems" [value]="problem" selected> {{ problem }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n\n\n        <ion-label [hidden]="othersSelected">Descrever Problema</ion-label>\n\n        <ion-item [hidden]="othersSelected">\n\n          <ion-input [(ngModel)]="problemDesc" type="text" id="problemDesc" placeholder="Descreva o problema"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button color="secondary" [disabled]="toiletProblem == \'\'" (click)="notifyFC()">Notificar</button>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-col>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\notification\notification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = (function () {
    function EmailService(httpClient) {
        this.httpClient = httpClient;
        this.urlApi = "http://52.90.187.252:3000/api/sendmail";
    }
    EmailService.prototype.send = function (emailModel) {
        var url = this.urlApi;
        var body = JSON.stringify({ to: emailModel.to, subject: emailModel.subject, text: emailModel.text });
        return this.httpClient.post(url, body);
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]])
], EmailService);

//# sourceMappingURL=email-service.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClient = (function () {
    function HttpClient(_http) {
        this._http = _http;
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        if (headers == null) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        }
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    //Verificar se o option esta preenchido, caso não estiver criar um novo
    HttpClient.prototype.getRequestOptionsArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        options.headers = this.createAuthorizationHeader(options.headers);
        return options;
    };
    HttpClient.prototype.get = function (url, options) {
        return this._http.get(url, this.getRequestOptionsArgs(options));
    };
    HttpClient.prototype.post = function (url, data, options) {
        return this._http.post(url, data, this.getRequestOptionsArgs(options));
    };
    HttpClient.prototype.put = function (url, data, options) {
        return this._http.put(url, data, this.getRequestOptionsArgs(options));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this._http.delete(url, this.getRequestOptionsArgs(options));
    };
    return HttpClient;
}());
HttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], HttpClient);

//# sourceMappingURL=http-client.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(382);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_adal_angular4__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_adal_angular4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_adal_angular4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notification_email_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notification_http_client__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10_adal_angular4__["Adal4Service"],
            __WEBPACK_IMPORTED_MODULE_12__pages_notification_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_13__pages_notification_http_client__["a" /* HttpClient */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_10_adal_angular4__["Adal4HTTPService"],
                useFactory: __WEBPACK_IMPORTED_MODULE_10_adal_angular4__["Adal4HTTPService"].factory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_10_adal_angular4__["Adal4Service"]]
            },
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_adal_angular4__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_adal_angular4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_adal_angular4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    tenant: 'fcamara.com.br',
    clientId: '254d3715-51c8-4d72-a65a-af7c716563e2',
    redirectUri: window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/'
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, adalService) {
        var _this = this;
        this.adalService = adalService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.adalService.init(config);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4_adal_angular4__["Adal4Service"]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 255,
	"./af.js": 255,
	"./ar": 256,
	"./ar-dz": 257,
	"./ar-dz.js": 257,
	"./ar-kw": 258,
	"./ar-kw.js": 258,
	"./ar-ly": 259,
	"./ar-ly.js": 259,
	"./ar-ma": 260,
	"./ar-ma.js": 260,
	"./ar-sa": 261,
	"./ar-sa.js": 261,
	"./ar-tn": 262,
	"./ar-tn.js": 262,
	"./ar.js": 256,
	"./az": 263,
	"./az.js": 263,
	"./be": 264,
	"./be.js": 264,
	"./bg": 265,
	"./bg.js": 265,
	"./bm": 266,
	"./bm.js": 266,
	"./bn": 267,
	"./bn.js": 267,
	"./bo": 268,
	"./bo.js": 268,
	"./br": 269,
	"./br.js": 269,
	"./bs": 270,
	"./bs.js": 270,
	"./ca": 271,
	"./ca.js": 271,
	"./cs": 272,
	"./cs.js": 272,
	"./cv": 273,
	"./cv.js": 273,
	"./cy": 274,
	"./cy.js": 274,
	"./da": 275,
	"./da.js": 275,
	"./de": 276,
	"./de-at": 277,
	"./de-at.js": 277,
	"./de-ch": 278,
	"./de-ch.js": 278,
	"./de.js": 276,
	"./dv": 279,
	"./dv.js": 279,
	"./el": 280,
	"./el.js": 280,
	"./en-au": 281,
	"./en-au.js": 281,
	"./en-ca": 282,
	"./en-ca.js": 282,
	"./en-gb": 283,
	"./en-gb.js": 283,
	"./en-ie": 284,
	"./en-ie.js": 284,
	"./en-nz": 285,
	"./en-nz.js": 285,
	"./eo": 286,
	"./eo.js": 286,
	"./es": 287,
	"./es-do": 288,
	"./es-do.js": 288,
	"./es-us": 289,
	"./es-us.js": 289,
	"./es.js": 287,
	"./et": 290,
	"./et.js": 290,
	"./eu": 291,
	"./eu.js": 291,
	"./fa": 292,
	"./fa.js": 292,
	"./fi": 293,
	"./fi.js": 293,
	"./fo": 294,
	"./fo.js": 294,
	"./fr": 295,
	"./fr-ca": 296,
	"./fr-ca.js": 296,
	"./fr-ch": 297,
	"./fr-ch.js": 297,
	"./fr.js": 295,
	"./fy": 298,
	"./fy.js": 298,
	"./gd": 299,
	"./gd.js": 299,
	"./gl": 300,
	"./gl.js": 300,
	"./gom-latn": 301,
	"./gom-latn.js": 301,
	"./gu": 302,
	"./gu.js": 302,
	"./he": 303,
	"./he.js": 303,
	"./hi": 304,
	"./hi.js": 304,
	"./hr": 305,
	"./hr.js": 305,
	"./hu": 306,
	"./hu.js": 306,
	"./hy-am": 307,
	"./hy-am.js": 307,
	"./id": 308,
	"./id.js": 308,
	"./is": 309,
	"./is.js": 309,
	"./it": 310,
	"./it.js": 310,
	"./ja": 311,
	"./ja.js": 311,
	"./jv": 312,
	"./jv.js": 312,
	"./ka": 313,
	"./ka.js": 313,
	"./kk": 314,
	"./kk.js": 314,
	"./km": 315,
	"./km.js": 315,
	"./kn": 316,
	"./kn.js": 316,
	"./ko": 317,
	"./ko.js": 317,
	"./ky": 318,
	"./ky.js": 318,
	"./lb": 319,
	"./lb.js": 319,
	"./lo": 320,
	"./lo.js": 320,
	"./lt": 321,
	"./lt.js": 321,
	"./lv": 322,
	"./lv.js": 322,
	"./me": 323,
	"./me.js": 323,
	"./mi": 324,
	"./mi.js": 324,
	"./mk": 325,
	"./mk.js": 325,
	"./ml": 326,
	"./ml.js": 326,
	"./mr": 327,
	"./mr.js": 327,
	"./ms": 328,
	"./ms-my": 329,
	"./ms-my.js": 329,
	"./ms.js": 328,
	"./mt": 330,
	"./mt.js": 330,
	"./my": 331,
	"./my.js": 331,
	"./nb": 332,
	"./nb.js": 332,
	"./ne": 333,
	"./ne.js": 333,
	"./nl": 334,
	"./nl-be": 335,
	"./nl-be.js": 335,
	"./nl.js": 334,
	"./nn": 336,
	"./nn.js": 336,
	"./pa-in": 337,
	"./pa-in.js": 337,
	"./pl": 338,
	"./pl.js": 338,
	"./pt": 339,
	"./pt-br": 340,
	"./pt-br.js": 340,
	"./pt.js": 339,
	"./ro": 341,
	"./ro.js": 341,
	"./ru": 342,
	"./ru.js": 342,
	"./sd": 343,
	"./sd.js": 343,
	"./se": 344,
	"./se.js": 344,
	"./si": 345,
	"./si.js": 345,
	"./sk": 346,
	"./sk.js": 346,
	"./sl": 347,
	"./sl.js": 347,
	"./sq": 348,
	"./sq.js": 348,
	"./sr": 349,
	"./sr-cyrl": 350,
	"./sr-cyrl.js": 350,
	"./sr.js": 349,
	"./ss": 351,
	"./ss.js": 351,
	"./sv": 352,
	"./sv.js": 352,
	"./sw": 353,
	"./sw.js": 353,
	"./ta": 354,
	"./ta.js": 354,
	"./te": 355,
	"./te.js": 355,
	"./tet": 356,
	"./tet.js": 356,
	"./th": 357,
	"./th.js": 357,
	"./tl-ph": 358,
	"./tl-ph.js": 358,
	"./tlh": 359,
	"./tlh.js": 359,
	"./tr": 360,
	"./tr.js": 360,
	"./tzl": 361,
	"./tzl.js": 361,
	"./tzm": 362,
	"./tzm-latn": 363,
	"./tzm-latn.js": 363,
	"./tzm.js": 362,
	"./uk": 364,
	"./uk.js": 364,
	"./ur": 365,
	"./ur.js": 365,
	"./uz": 366,
	"./uz-latn": 367,
	"./uz-latn.js": 367,
	"./uz.js": 366,
	"./vi": 368,
	"./vi.js": 368,
	"./x-pseudo": 369,
	"./x-pseudo.js": 369,
	"./yo": 370,
	"./yo.js": 370,
	"./zh-cn": 371,
	"./zh-cn.js": 371,
	"./zh-hk": 372,
	"./zh-hk.js": 372,
	"./zh-tw": 373,
	"./zh-tw.js": 373
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 699;

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModel; });
var EmailModel = (function () {
    function EmailModel() {
        this.to = "";
        this.subject = "";
        this.text = "";
    }
    return EmailModel;
}());

//# sourceMappingURL=email.model.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_adal_angular4__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_adal_angular4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_adal_angular4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, adalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adalService = adalService;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.token = sessionStorage.getItem("adal.idtoken");
        if (this.token) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.teste()
            .then(function (res) { return console.log(res); })
            .catch(function (erro) { return console.log(erro); });
    };
    LoginPage.prototype.teste = function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.adalService.handleWindowCallback();
                        if (!!this.adalService.userInfo.authenticated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.adalService.login()];
                    case 1:
                        success = _a.sent();
                        _a.label = 2;
                    case 2:
                        // console.log(this.adalService.userInfo)
                        localStorage.setItem('userName', this.adalService.userInfo.profile.name);
                        localStorage.setItem('userEmail', this.adalService.userInfo.username);
                        return [2 /*return*/, success];
                }
            });
        });
    };
    LoginPage.prototype.loginOffice365 = function () {
        this.teste()
            .then(function (res) { return console.log(res); })
            .catch(function (erro) { return console.log(erro); });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n    <button (click)="loginOffice365()" ion-button>Login</button>\n\n</ion-content>  \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\matheus.campos\Desktop\projetos antigos\DesafioIotNew\desafioIoT\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_adal_angular4__["Adal4Service"]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_adal_angular4__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_adal_angular4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_adal_angular4__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, adalService) {
        this.http = http;
        this.adalService = adalService;
        console.log('Hello Auth Provider');
    }
    AuthService.prototype.login = function () {
        this.adalService.login();
    };
    AuthService.prototype.storeUserData = function (userInfoModel) {
        localStorage.setItem('userInfo', JSON.stringify(userInfoModel));
        console.log(userInfoModel);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_4_adal_angular4__["Adal4Service"]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.js.map