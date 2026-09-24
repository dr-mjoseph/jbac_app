webpackJsonp([22],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarriagePageModule", function() { return MarriagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marriage__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarriagePageModule = /** @class */ (function () {
    function MarriagePageModule() {
    }
    MarriagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marriage__["a" /* MarriagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marriage__["a" /* MarriagePage */]),
            ],
        })
    ], MarriagePageModule);
    return MarriagePageModule;
}());

//# sourceMappingURL=marriage.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarriagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(128);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';


var MarriagePage = /** @class */ (function () {
    function MarriagePage(navCtrl, navParams, formbuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.service = service;
        this.fromshow = 1;
        this.isShowDiv = true;
        this.form = this.formbuilder.group({
            denomation_id: [''],
            ministry_id: [''],
            gender: [''],
            status: [''],
            caste: [''],
            spirti: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constenncy_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            panchayati_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    MarriagePage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    MarriagePage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.defaultdata();
        this.getbeliver();
        this.getdenomations();
    };
    MarriagePage.prototype.trimString = function (string, length) {
        return string.length > length
            ? string.substring(0, length) + "..."
            : string;
    };
    MarriagePage.prototype.serach = function (event, tableid) {
    };
    MarriagePage.prototype.defaultdata = function () {
        var _this = this;
        var data = { df: 0 };
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MarriagePage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.districts = res.data;
            }
        });
    };
    MarriagePage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    MarriagePage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
            }
        }, function (error) {
            console.log(error);
        });
    };
    MarriagePage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
            }
        }, function (error) {
            console.log(error);
        });
    };
    MarriagePage.prototype.searchdistric = function (event) {
        var _this = this;
        this.searchdist = event;
        var data = {
            district_id: this.searchdist,
            df: 1
        };
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    MarriagePage.prototype.searchconstenct = function (event) {
        var _this = this;
        this.searchconts = event;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            df: 2,
        };
        console.log(data);
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = res.data;
            if (res.status == 200) {
                _this.marriagedata = res.data;
            }
            else {
                alert('No Data');
            }
        });
    };
    MarriagePage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    MarriagePage.prototype.searchmandals = function (event) {
        var _this = this;
        this.searchmand = event;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            mandal_id: event,
            df: 3,
        };
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MarriagePage.prototype.searchvillages = function (event) {
        var _this = this;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            mandal_id: this.searchmand,
            village_id: event,
            df: 4,
        };
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        });
    };
    MarriagePage.prototype.search = function () {
        var _this = this;
        var data = {
            id: this.form.value.village_id
        };
        this.service.searchmarriages(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
                console.log(_this.marriagedata);
                _this.fromshow = 1;
            }
            else {
                alert('server down');
            }
        });
    };
    MarriagePage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.ministryname = res.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    MarriagePage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
            console.log(res.data);
        });
    };
    MarriagePage.prototype.serachgender = function (event, tableid) {
        var _this = this;
        console.log(event);
        var data = {
            name: event,
            columnid: tableid
        };
        this.service.searchingmarriages(data).subscribe(function (res) {
            _this.marriagedata = res.data;
        });
    };
    MarriagePage.prototype.serachcaste = function (event, tableid) {
        var _this = this;
        var data = {
            name: event,
            columnid: tableid
        };
        this.service.searchingmarriages(data).subscribe(function (res) {
            _this.marriagedata = res.data;
        });
    };
    MarriagePage.prototype.spirit = function (event, tableid) {
        var _this = this;
        var data = {
            name: event,
            columnid: tableid
        };
        this.service.searchingmarriages(data).subscribe(function (res) {
            _this.marriagedata = res.data;
        });
    };
    MarriagePage.prototype.toggleDisplayDiv = function (item) {
        item.isShowDiv = !item.isShowDiv;
    };
    MarriagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marriage',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\marriage\marriage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>Marriage</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <form [formGroup]="form" *ngIf="fromshow==2">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> సెలెక్ట్ డినామినేషన్ మోడల్</ion-label>\n\n          <ion-select formControlName="denomation_id" (ionChange)="serachgender($event, 1)">\n\n            <ion-option value="" disabled selected>డినామినేషన్  ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{ i.denomation_name }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> సేవలు</ion-label>\n\n          <ion-select formControlName="ministry_id" (ionChange)="serachgender($event, 2)">\n\n            <ion-option value="" disabled selected>సేవ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{ i.ministryname }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> జెండర్</ion-label>\n\n          <ion-select formControlName="gender" (ionChange)="serachgender($event, 3)">\n\n            <ion-option value="" disabled selected>జెండర్ ఎంచుకోండి</ion-option>\n\n            <ion-option value="Male">పురుషుడు</ion-option>\n\n            <ion-option value="Female">స్త్రీ</ion-option>\n\n\n\n            \n\n            <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ వివాహ స్థితి</ion-label>\n\n          <ion-select formControlName="status" (ionChange)="serachcaste($event, 4)">\n\n            <ion-option value="" disabled selected>మీ వివాహ స్థితి ఎంచుకోండి</ion-option>\n\n            <ion-option value="వివాహం కాలేదు">వివాహం కాలేదు</ion-option>\n\n            <ion-option value="వివాహం అయినది">వివాహం అయినది</ion-option>\n\n            <ion-option value="విడాకులు అయినది">విడాకులు అయినది</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> జాతి</ion-label>\n\n          <ion-select formControlName="caste" (ionChange)="serach($event, 5)">\n\n            <ion-option value="" disabled selected>జాతి ఎంచుకోండి</ion-option>\n\n            <ion-option value="SC">జాతి లేదు</ion-option>\n\n            <ion-option value="SC">ఎస్సి</ion-option>\n\n            <ion-option value="ST">ఎస్టి</ion-option>\n\n            <ion-option value="BC">బీసీ - ఏ</ion-option>\n\n            <ion-option value="BC">బీసీ - బీ</ion-option>\n\n            <ion-option value="BC">బీసీ - సీ</ion-option>\n\n            <ion-option value="BC">బీసీ - డీ</ion-option>\n\n            <ion-option value="BC">బీసీ - ఇ</ion-option>\n\n            <ion-option value="OC">ఒసీ</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> ఆధ్యాత్మిక స్థితి</ion-label>\n\n          <ion-select formControlName="spirti" (ionChange)="spirit($event, 6)">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="practicingchristian">అభ్యాస చేసే క్రిస్తవుడు</ion-option>\n\n            <ion-option value="nominalchristian">పేరు కేవలం క్రిస్తవుడు</ion-option>\n\n            <ion-option value="festivalchristian">పండుగ క్రిస్తవుడు</ion-option>\n\n            <ion-option value="justbelievingjesus">కేవలం యేసుని నమ్మినట్లే</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> జిల్లాలను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)"\n\n            (ionChange)="searchdistric($event)">\n\n            <ion-option value="" disabled selected>జిల్లాలను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{ item.distrct_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> ఎన్నికల మండలాను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="constenncy_id" (ionChange)="getmandals($event)"\n\n            (ionChange)="searchconstenct($event)">\n\n            <ion-option value="" disabled selected>ఎన్నికల మండలాను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{ item.const_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> మండలాలను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)"\n\n            (ionChange)="searchmandals($event)">\n\n            <ion-option value="" disabled selected>మండలాలను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{ item.mndl_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked> పంచాయతీ ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="panchayati_id" (ionChange)="searchvillages($event)">\n\n            <ion-option value="" disabled selected>పంచాయతీ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{ item.pnchyt_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <button ion-button block color="secondary" (click)="search()">శోధించు</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 *ngFor="let item of marriagedata">\n\n      <ion-card>\n\n        <img src="{{item.image}}" style="width:100%;height: 250px;"  onerror="this.onerror=null;this.src=\'assets/icon/svg/image.svg\';">\n\n        <table class="styled-table" style="text-transform: capitalize;">\n\n          <tbody>\n\n            <tr>\n\n              <th>పేరు</th>\n\n              <td><strong>{{item.name}}</strong></td>\n\n            </tr>\n\n            <tr>\n\n              <th>పని</th>\n\n              <td><strong>{{item.work}}</strong></td>\n\n            </tr>\n\n            <tr>\n\n              <th>చిరునామా</th>\n\n              <td><strong>{{item.address}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >రంగు</th>\n\n              <td ><strong>{{item.color}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >ఎత్తు</th>\n\n              <td ><strong>{{item.height}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >జెండర్</th>\n\n              <td ><strong>{{item.gender}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >పుట్టిన తేదీ</th>\n\n              <td ><strong>{{item.dob}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >మీ వివాహ స్థితి</th>\n\n              <td ><strong>{{item.status}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >స్థలం</th>\n\n              <td ><strong>{{item.location}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >వివరణ</th>\n\n              <td ><strong>{{item.description}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >ఉప జాతి</th>\n\n              <td ><strong>{{item.subcaste}}</strong></td>\n\n            </tr>\n\n            <tr >\n\n              <th >చర్యలు</th>\n\n              <td >\n\n                <a href="{{item.location}}" class="icon-link"><ion-icon name="location"></ion-icon></a>\n\n                <a href="tel:+91{{item.phonenumber}}" class="icon-link"><ion-icon name="call"></ion-icon></a>\n\n              </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\marriage\marriage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], MarriagePage);
    return MarriagePage;
}());

//# sourceMappingURL=marriage.js.map

/***/ })

});
//# sourceMappingURL=22.js.map