webpackJsonp([24],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutePageModule", function() { return InstitutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__institute__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InstitutePageModule = /** @class */ (function () {
    function InstitutePageModule() {
    }
    InstitutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__institute__["a" /* InstitutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__institute__["a" /* InstitutePage */]),
            ],
        })
    ], InstitutePageModule);
    return InstitutePageModule;
}());

//# sourceMappingURL=institute.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the InstitutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstitutePage = /** @class */ (function () {
    function InstitutePage(navCtrl, navParams, service, frombuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.frombuilder = frombuilder;
        this.institutesdata = [];
        this.fromshow = 1;
        this.institutedata = [];
        this.submitted = false;
        this.form = this.frombuilder.group({
            denomination_id: [''],
            ministry_id: [''],
            district_id: [''],
            constenncy_id: [''],
            mandal_id: [''],
            panchayati_id: [''],
            course_offered: [''],
            college_type: ['']
        });
    }
    InstitutePage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
        this.getbeliver();
        this.getinstitutes();
    };
    InstitutePage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    InstitutePage.prototype.getinstitutes = function () {
        var _this = this;
        this.service.institutes().subscribe(function (res) {
            _this.institutesdata = res.data;
        });
    };
    InstitutePage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.ministryname = res.data;
            }
        });
    };
    InstitutePage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    InstitutePage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    InstitutePage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    InstitutePage.prototype.getconstituency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    InstitutePage.prototype.getpanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    InstitutePage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    InstitutePage.prototype.search = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
        }
        else {
            this.service.Searchinstitute(this.form.value).subscribe(function (res) {
                _this.institutedata = [];
                if (res.status == 200) {
                    _this.institutedata = res.data;
                    _this.submitted = false;
                    _this.fromshow = 1;
                }
                else {
                    alert('no data');
                }
            });
        }
    };
    InstitutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-institute',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\institute\institute.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>ఇన్‌స్టిట్యూట్‌</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <form [formGroup]="form" *ngIf="fromshow==2">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్‌</ion-label>\n\n          <ion-select formControlName="denomination_id">\n\n            <ion-option value="" disabled selected>డినామినేషన్ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of denomation" [value]="item.id">{{ item.denomation_name }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రిస్తానం ఎంచుకోండండి</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{ i.ministryname }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అంచును అంచని కోర్సులు</ion-label>\n\n          <ion-select formControlName="course_offered">\n\n            <ion-option value="" disabled selected>ఇన్స్టిట్యూట్‌ను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of institutesdata" [value]="item.course_offered">{{ item.course_offered\n\n              }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కళాశాల రకం</ion-label>\n\n          <ion-select formControlName="college_type">\n\n            <ion-option value="" disabled selected>కళాశాల ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of institutesdata"\n\n              [value]="item.college_type">{{item.college_type}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాలను ఎంచుకోండండి</ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstituency($event)">\n\n            <ion-option value="" disabled selected>జిల్లాలను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం ఎంచుకోండండి</ion-label>\n\n          <ion-select formControlName="constenncy_id" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>నియోజకవర్గం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాలను ఎంచుకోండండి</ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="getpanchayati($event)">\n\n            <ion-option value="" disabled selected>మండలాలను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{ item.mndl_nm }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయతీ ఎంచుకోండండి</ion-label>\n\n          <ion-select formControlName="panchayati_id">\n\n            <ion-option value="" disabled selected>పంచాయతీ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 (click)="search()">\n\n        <button ion-button type="submit" block color="primary"><ion-icon name="search"></ion-icon>శోధించు</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n  <ion-grid>\n\n    <ion-row *ngIf="institutedata.length!=0">\n\n      <ion-col col-12 *ngFor="let item of institutedata" style="margin-bottom: 16px;">\n\n        <ion-card>\n\n          <ion-img *ngIf="!item.image || item.image === \'\'" src="assets/images/no.jpg"></ion-img>\n\n          <ion-img *ngIf="item.image" [src]="item.image"></ion-img>\n\n          <ion-card-content>\n\n            <p>ఇన్స్టిట్యూట్ పేరు: <strong>{{item.institutename}}</strong></p>\n\n            <p>అంచని అంచని కోర్సులు: <b>{{item.course_offered}}</b></p>\n\n            <p>కళాశాల రకం: <strong>{{item.college_type}}</strong></p>\n\n            <a (click)="toggleDisplayDiv()" style="color: rgb(175, 15, 15)">మరింత చదవండి</a>\n\n            <p [hidden]="isShowDiv">ఫోన్ నంబర్: <strong>{{item.phonenumber}}</strong></p>\n\n            <a href="{{item.location}}" [hidden]="isShowDiv"><ion-icon name="pin"></ion-icon></a>\n\n            <a href="{{item.youtube}}" [hidden]="isShowDiv"><ion-icon name="logo-youtube"></ion-icon></a>\n\n            <a href="{{item.facebook}}" [hidden]="isShowDiv"><ion-icon name="logo-facebook"></ion-icon></a>\n\n            <a href="tel:+91{{item.phonenumber}}" [hidden]="isShowDiv"><ion-icon name="call"></ion-icon></a>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="institutedata.length==0">\n\n      <h2 style="margin-top: 50%;color: white;margin-left: 25%;">\n\n        డేటా దొరకలేదు\n\n      </h2>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\institute\institute.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], InstitutePage);
    return InstitutePage;
}());

//# sourceMappingURL=institute.js.map

/***/ })

});
//# sourceMappingURL=24.js.map