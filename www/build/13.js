webpackJsonp([13],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchorganisationPageModule", function() { return SearchorganisationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchorganisation__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchorganisationPageModule = /** @class */ (function () {
    function SearchorganisationPageModule() {
    }
    SearchorganisationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__searchorganisation__["a" /* SearchorganisationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__searchorganisation__["a" /* SearchorganisationPage */]),
            ],
        })
    ], SearchorganisationPageModule);
    return SearchorganisationPageModule;
}());

//# sourceMappingURL=searchorganisation.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchorganisationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
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
/**
 * Generated class for the SearchorganisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchorganisationPage = /** @class */ (function () {
    function SearchorganisationPage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.fromshow = 1;
        this.isShowDiv = true;
        this.serachMeetingform = this.formBuilder.group({
            denomation_id: [''],
            ministry_id: [''],
            service_name: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constenncy_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            panchayati_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
    }
    SearchorganisationPage.prototype.defaultdata = function () {
        var _this = this;
        this.service.getorganizations().subscribe(function (res) {
            console.log(res.data);
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
                console.log(_this.marriagedata);
            }
        }, function (error) {
        });
    };
    SearchorganisationPage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    SearchorganisationPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        // this.searechevents();
        this.defaultdata();
        this.getdenomations();
        this.getbeliver();
    };
    SearchorganisationPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    SearchorganisationPage.prototype.getdistric = function () {
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
    SearchorganisationPage.prototype.getbeliver = function () {
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
    SearchorganisationPage.prototype.getservice = function () {
        var _this = this;
        this.service.getservices().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.services = res.data;
            }
        }, function (error) {
        });
    };
    SearchorganisationPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    SearchorganisationPage.prototype.toggleDisplayDiv = function () {
        this.isShowDiv = !this.isShowDiv;
    };
    SearchorganisationPage.prototype.getmandals = function (event) {
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
    SearchorganisationPage.prototype.trimString = function (string, length) {
        return string.length > length
            ? string.substring(0, length) + "..."
            : string;
    };
    SearchorganisationPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    SearchorganisationPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
            }
        });
    };
    SearchorganisationPage.prototype.serachcaste = function (event) {
        var _this = this;
        this.denomation_id = event;
        var data = {
            denomation_id: event,
            df: 1,
        };
        this.service.searchorganization(data).subscribe(function (res) {
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
    SearchorganisationPage.prototype.serachgender = function (event) {
        var _this = this;
        this.ministry_id = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            df: 2
        };
        this.service.searchorganization(data).subscribe(function (res) {
            console.log(data);
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
    SearchorganisationPage.prototype.servicessearch = function (event) {
        var _this = this;
        this.service_name = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            service_name: this.service_name,
            df: 3,
        };
        console.log(data);
        this.service.searchorganization(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('No Data');
            }
        }, function (error) {
        });
    };
    SearchorganisationPage.prototype.serachgenders = function (event, tableid) {
        var _this = this;
        var data = {
            name: event,
            columnid: tableid
        };
        console.log(data);
        this.service.searchinorganizations(data).subscribe(function (res) {
            _this.marriagedata = res.data;
        });
    };
    SearchorganisationPage.prototype.searchdistric = function (event) {
        var _this = this;
        this.district_id = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            service_name: this.service_name,
            district_id: this.district_id,
            df: 4
        };
        console.log(data);
        this.service.searchorganization(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
                console.log(_this.marriagedata);
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    SearchorganisationPage.prototype.searchconstenct = function (event) {
        var _this = this;
        this.constenncy_id = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            service_name: this.service_name,
            district_id: this.district_id,
            constenncy_id: this.constenncy_id,
            df: 5,
        };
        console.log(data);
        this.service.searchorganization(data).subscribe(function (res) {
            _this.marriagedata = [];
            if (res.status == 200) {
                _this.marriagedata = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('No Data');
            }
        }, function (error) {
        });
    };
    SearchorganisationPage.prototype.searchmandals = function (event) {
        var _this = this;
        this.mandal_id = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            service_name: this.service_name,
            district_id: this.district_id,
            constenncy_id: this.searchconts,
            mandal_id: this.mandal_id,
            df: 6,
        };
        this.service.searchorganization(data).subscribe(function (res) {
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
    SearchorganisationPage.prototype.searchvillages = function (event) {
        var _this = this;
        this.panchayati_id = event;
        var data = {
            denomation_id: this.denomation_id,
            ministry_id: this.ministry_id,
            service_name: this.service_name,
            district_id: this.district_id,
            constenncy_id: this.searchconts,
            mandal_id: this.mandal_id,
            panchayati_id: this.panchayati_id,
            df: 6,
        };
        console.log(data);
        this.service.searchorganization(data).subscribe(function (res) {
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
    SearchorganisationPage.prototype.search = function () {
        var _this = this;
        var data = {
            id: this.serachMeetingform.value.village_id
        };
        console.log(data);
        this.service.searchorganization(data).subscribe(function (res) {
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
    SearchorganisationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchorganisation',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\searchorganisation\searchorganisation.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>Search Organistaion</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <form [formGroup]="serachMeetingform" *ngIf="fromshow==2">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n                <ion-label stacked for="pattern_name">దేనోమినేషన్\n\n                    <span style="color:red;">*</span>\n\n                </ion-label>\n\n                <ion-select formControlName="denomation_id" (ionChange)="serachcaste($event); serachgenders($event,1);">\n\n                    <ion-option value="" disabled selected>దేనోమినేషన్ ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>మంత్రిస్థాయి</ion-label>\n\n                <ion-select formControlName="ministry_id" (ionChange)="serachgenders($event,2); serachgender($event);">\n\n                    <ion-option value="" disabled selected>మంత్రిస్థాయి ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>సేవా పేరు</ion-label>\n\n                <ion-select formControlName="service_name" (ionChange)="serachgenders($event,3); servicessearch($event);">\n\n                    <ion-option value="" disabled selected>సేవ ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let item of services" [value]="item.id">{{item.servicename}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>జిల్లాలను ఎంచుకోండి</ion-label>\n\n                <ion-select formControlName="district_id" (ionChange)="getconstency($event); searchdistric($event); serachgenders($event,4);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>మండలాలను ఎంచుకోండి</ion-label>\n\n                <ion-select formControlName="constenncy_id" (ionChange)="getmandals($event); searchconstenct($event); serachgenders($event,5);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>మండలాలను ఎంచుకోండి</ion-label>\n\n                <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event); searchmandals($event); serachgenders($event,6);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n               <ion-label stacked>పంచాయతీ ఎంచుకోండి</ion-label>\n\n                <ion-select formControlName="panchayati_id" (ionChange)="searchvillages($event); serachgenders($event,7);">\n\n                    <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n                    <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 style="text-align: center;">\n\n            <button  ion-button color="primary" (click)="search()">శోధన</button>\n\n        </ion-col>\n\n    </ion-row>\n\n</form>\n\n\n\n\n\n<div class="row">\n\n  <ion-col col-12  *ngFor="let item of marriagedata" style="text-align: center;">\n\n      <ion-card >\n\n          <img *ngIf="!item.image || item.image === \'\'" src="assets/icon/svg/photo.svg"\n\n             style="width:200px; height:200px" >\n\n          <img  *ngIf="item.image" [src]="item.image" style="width:212px;height:251px;"\n\n              (click)="openimg(item.image, openmodel)">\n\n          <ion-card-content>\n\n              <ion-card-title>Organisation Name: <strong>{{item.organisation_name}}</strong></ion-card-title>\n\n              <p>Street name: <strong>{{item.ward}}</strong></p>\n\n              <p>Local address: <strong>{{item.org_address}}</strong></p>\n\n              <!-- <a (click)="toggleDisplayDiv()" style="color:rgb(175, 15, 15)">READMORE</a> -->\n\n              <!-- <a [href]="item.location" [hidden]="isShowDiv">\n\n                  <img src="assets/images/marker.png" style="width:45px;">\n\n              </a>\n\n              <a [href]="\'tel:+91\' + item.contact_num" [hidden]="isShowDiv">\n\n                  <img src="assets/images/phone.png" style="width:45px;">\n\n              </a> -->\n\n          </ion-card-content>\n\n      </ion-card>\n\n  </ion-col>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\searchorganisation\searchorganisation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], SearchorganisationPage);
    return SearchorganisationPage;
}());

//# sourceMappingURL=searchorganisation.js.map

/***/ })

});
//# sourceMappingURL=13.js.map