webpackJsonp([23],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobs__["a" /* JobsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobs__["a" /* JobsPage */]),
            ],
        })
    ], JobsPageModule);
    return JobsPageModule;
}());

//# sourceMappingURL=jobs.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
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


var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, navParams, formbuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.service = service;
        this.fromshow = 1;
        this.form = this.formbuilder.group({
            jobtile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            qual: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            experience: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constenncy_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            panchayati_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    JobsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    JobsPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getjobs();
        this.getjob();
    };
    JobsPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            if (res.status == 202) {
                alert(res.message);
            }
            else if (res.status == 200) {
                _this.districts = res.data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    JobsPage.prototype.getmandals = function (event) {
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
    JobsPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    JobsPage.prototype.gepanchayati = function (event) {
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
    JobsPage.prototype.getjobs = function () {
        var _this = this;
        var data = {
            df: 0
        };
        this.service.getjobs(data).subscribe(function (res) {
            _this.jobs = [];
            if (res.status == 200) {
                _this.jobs = res.data.map(function (item) { return (__assign({}, item, { showMore: false })); });
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    JobsPage.prototype.searchdistric = function (event) {
        var _this = this;
        this.searchdist = event;
        var data = {
            district_id: this.searchdist,
            df: 1
        };
        this.service.getjobs(data).subscribe(function (res) {
            _this.jobs = [];
            if (res.status == 200) {
                _this.jobs = res.data;
            }
            else {
                alert('server down');
            }
        }, function (error) {
        });
    };
    JobsPage.prototype.searchconstenct = function (event) {
        var _this = this;
        this.searchconts = event;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            df: 2,
        };
        this.service.getjobs(data).subscribe(function (res) {
            _this.jobs = [];
            if (res.status == 200) {
                _this.jobs = res.data;
            }
            else {
                alert('No Data');
            }
        });
    };
    JobsPage.prototype.searchmandals = function (event) {
        var _this = this;
        var data = {
            district_id: this.searchdist,
            constenncy_id: this.searchconts,
            mandal_id: event,
            df: 3,
        };
        this.service.getjobs(data).subscribe(function (res) {
            _this.jobs = [];
            if (res.status == 200) {
                _this.jobs = res.data;
            }
            else {
                alert('server down');
            }
        });
    };
    JobsPage.prototype.search = function () {
        var _this = this;
        this.service.getjobs(this.form.value).subscribe(function (res) {
            _this.jobs = [];
            if (res.status == 200) {
                _this.jobs = res.data;
                _this.fromshow = 1;
            }
            else {
                alert('server down');
            }
        });
    };
    JobsPage.prototype.filterData = function () {
        var _this = this;
        this.jobs = this.jobs.filter(function (item) {
            return JSON.stringify(item)
                .toLowerCase()
                .includes(_this.searchTerm.toLowerCase());
        });
    };
    JobsPage.prototype.getjob = function () {
        var _this = this;
        this.service.getjob().subscribe(function (res) {
            _this.jobswe = res.data;
            console.log(_this.jobswe);
        });
    };
    JobsPage.prototype.searchjobswise = function (event, colid) {
        var _this = this;
        var data = {
            name: event,
            colid: colid
        };
        this.service.searchjobswise(data).subscribe(function (res) {
            _this.jobs = res.data;
        });
    };
    JobsPage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    JobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobs',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\jobs\jobs.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>ఉద్యోగాలు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <form [formGroup]="form" *ngIf="fromshow==2">\n\n    <ion-grid>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-4>\n\n          <ion-item>\n\n            <ion-label stacked>ఉద్యోగ పేరు</ion-label>\n\n            <ion-select formControlName="jobtile" interface="popover" style="width: 273px;"\n\n              (ionChange)="searchjobswise($event, 1)">\n\n              <ion-option value="" disabled selected>పేరు ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of jobswe" [value]="item.jobtitle">{{item.jobtitle}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-4>\n\n          <ion-item>\n\n            <ion-label stacked>అర్హత</ion-label>\n\n            <ion-select formControlName="qual" interface="popover" style="width: 273px;"\n\n              (ionChange)="searchjobswise($event, 2)">\n\n              <ion-option value="" disabled selected>అర్హత ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of jobswe" [value]="item.qualification">{{item.qualification}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-4>\n\n          <ion-item>\n\n            <ion-label stacked>అనుభవం</ion-label>\n\n            <ion-select formControlName="experience" interface="popover" style="width: 273px;"\n\n              (ionChange)="searchjobswise($event, 3)">\n\n              <ion-option value="" disabled selected>మీ అనుభవం ఎంచుకోండి</ion-option>\n\n              <ion-option value="fresher">ఫ్రెషర్</ion-option>\n\n              <ion-option value="1-2">1-2</ion-option>\n\n              <ion-option value="2-3">2-3</ion-option>\n\n              <ion-option value="3-5">3-5</ion-option>\n\n              <ion-option value="Above 5YEARS">5 ఏళ్ళ మీరున్నారు</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-3>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లాలను ఎంచుకోండండి</ion-label>\n\n            <ion-select formControlName="district_id" interface="popover" style="width: 273px;"\n\n              (ionChange)="getconstency($event)" (ionChange)="searchdistric($event)">\n\n              <ion-option value="" disabled selected>జిల్లా ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-2>\n\n          <ion-item>\n\n            <ion-label stacked>నియోజకవర్గం ఎంచుకోండండి</ion-label>\n\n            <ion-select formControlName="constenncy_id" interface="popover" style="width: 273px;"\n\n              (ionChange)="getmandals($event)" (ionChange)="searchconstenct($event)">\n\n              <ion-option value="" disabled selected>నియోజకవర్గం ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-2>\n\n          <ion-item>\n\n            <ion-label stacked>మండలాలను ఎంచుకోండండి</ion-label>\n\n            <ion-select formControlName="mandal_id" interface="popover" style="width: 273px;"\n\n              (ionChange)="gepanchayati($event)" (ionChange)="searchmandals($event)">\n\n              <ion-option value="" disabled selected>మండల ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-2>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయతీ ఎంచుకోండండి</ion-label>\n\n            <ion-select formControlName="panchayati_id" interface="popover" style="width: 273px;">\n\n              <ion-option value="" disabled selected>పంచాయతీ ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-md-2>\n\n          <button type="submit" (click)="search()" ion-button block color="primary"> శోధించు </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n    </ion-grid>\n\n  </form>\n\n</ion-content> '/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\jobs\jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], JobsPage);
    return JobsPage;
}());

//# sourceMappingURL=jobs.js.map

/***/ })

});
//# sourceMappingURL=23.js.map