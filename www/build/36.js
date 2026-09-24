webpackJsonp([36],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchTimingsPageModule", function() { return ChurchTimingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__church_timings__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChurchTimingsPageModule = /** @class */ (function () {
    function ChurchTimingsPageModule() {
    }
    ChurchTimingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__church_timings__["a" /* ChurchTimingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__church_timings__["a" /* ChurchTimingsPage */]),
            ],
        })
    ], ChurchTimingsPageModule);
    return ChurchTimingsPageModule;
}());

//# sourceMappingURL=church-timings.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchTimingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(128);
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
var ChurchTimingsPage = /** @class */ (function () {
    function ChurchTimingsPage(navCtrl, navParams, formBuilder, toastCtrl, service, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.fromshow = 1;
        this.isShowDiv = true;
        this.searchchurchingform = this.formBuilder.group({
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constenncy_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            typetime: ['1'],
            panchayati_id: [''],
            denomationid: [''],
            ministry_id: [''],
            day: [''],
        });
    }
    ChurchTimingsPage.prototype.onSearch = function () {
        if (this.fromshow == 1) {
            this.fromshow = 2;
        }
        else {
            this.fromshow = 1;
        }
    };
    ChurchTimingsPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        // this.churchtimings();
        this.getdenomations();
        this.getbeliver();
        this.getadds();
        this.search();
    };
    ChurchTimingsPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    Object.defineProperty(ChurchTimingsPage.prototype, "h", {
        get: function () { return this.searchchurchingform.controls; },
        enumerable: true,
        configurable: true
    });
    ChurchTimingsPage.prototype.getbeliver = function () {
        var _this = this;
        this.service.getbeliversdata().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_1 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_1.present();
            }
            else if (res.status == 200) {
                _this.ministryname = res.data;
            }
        });
    };
    ChurchTimingsPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_2 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_2.present();
            }
            else if (res.status == 200) {
                _this.districts = res.data;
            }
        });
    };
    ChurchTimingsPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_3 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_3.present();
            }
            else if (res.status == 200) {
                _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
            }
        });
    };
    ChurchTimingsPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    ChurchTimingsPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_4 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_4.present();
            }
            else if (res.status == 200) {
                _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
            }
        });
    };
    ChurchTimingsPage.prototype.churchtimings = function () {
        var _this = this;
        this.service.getchurches().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_5 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_5.present();
            }
            else if (res.status == 200) {
                _this.church = res.data;
            }
        });
    };
    ChurchTimingsPage.prototype.search = function () {
        var _this = this;
        console.log(this.searchchurchingform.value);
        this.service.searchingchurchdata(this.searchchurchingform.value).subscribe(function (res) {
            _this.church = [];
            if (res.status == 200 && res.data.length != 0) {
                _this.church = res.data;
                _this.submitted = false;
            }
            else {
                var confirm_6 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: 'డేటా లేదు'
                });
                confirm_6.present();
            }
        });
    };
    ChurchTimingsPage.prototype.toggleDisplayDiv = function () {
        this.isShowDiv = !this.isShowDiv;
    };
    ChurchTimingsPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    ChurchTimingsPage.prototype.reset = function () {
        this.searchchurchingform.reset();
    };
    ChurchTimingsPage.prototype.hidefrom = function () {
        this.fromshow = 1;
    };
    ChurchTimingsPage.prototype.getadds = function () {
        var _this = this;
        this.service.getadds().subscribe(function (res) {
            if (res.status == 202) {
                var confirm_7 = _this.alertCtrl.create({
                    mode: 'ios',
                    title: res.message
                });
                confirm_7.present();
            }
            else if (res.status == 200) {
                _this.church = res.data;
            }
        });
    };
    ChurchTimingsPage.prototype.of = function () {
        var confirm = this.alertCtrl.create({
            mode: 'ios',
            title: 'Link not Found'
        });
        confirm.present();
    };
    ChurchTimingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-church-timings',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\church-timings\church-timings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center;font-family: Ramabhadra,sans-serif!important;"><b>చర్చి సమయాలు </b></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="pagecss">\n\n\n\n  <ion-searchbar (click)="onSearch()" *ngIf="fromshow==1"></ion-searchbar>\n\n\n\n  <ion-card>\n\n    <form [formGroup]="searchchurchingform" *ngIf="fromshow==2">\n\n      <ion-item>\n\n        <ion-label stacked style="color:black">సర్వీస్ టైమింగ్స్</ion-label>\n\n        <ion-select formControlName="typetime" interface="popover">\n\n          <ion-option value="" disabled selected> సమయాన్ని ఎంచుకోండి</ion-option>\n\n          <ion-option value="1">With Timings</ion-option>\n\n          <ion-option value="2">Without Timings</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్‌</ion-label>\n\n        <ion-select formControlName="denomationid">\n\n          <ion-option value="" disabled selected>Select Type</ion-option>\n\n          <ion-option *ngFor="let item of denomation" [value]="item.id">\n\n            {{ item.denomation_name }}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>సెలెక్ట్ మినిస్ట్రీ</ion-label>\n\n        <ion-select formControlName="ministry_id">\n\n          <ion-option value="" disabled selected>సెలెక్ట్ మినిస్ట్రీ</ion-option>\n\n          <ion-option *ngFor="let i of ministryname" [value]="i.id">\n\n            {{ i.ministryname }}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>సర్వీసెస్ రోజు</ion-label>\n\n        <ion-select formControlName="day" [class.is-invalid]="submitted && searchChurchingForm.get(\'day\').errors">\n\n          <ion-option value="" disabled selected>రోజును ఎంచుకోండి</ion-option>\n\n          <ion-option value="Sunday">Sunday</ion-option>\n\n          <ion-option value="Monday">Monday</ion-option>\n\n          <ion-option value="Tuesday">Tuesday</ion-option>\n\n          <ion-option value="Wednesday">Wednesday</ion-option>\n\n          <ion-option value="Thursday">Thursday</ion-option>\n\n          <ion-option value="Friday">Friday</ion-option>\n\n          <ion-option value="Saturday">Saturday</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked> జిల్లాలను ఎంచుకోండి <span style="color:red; ">*</span></ion-label>\n\n        <ion-select formControlName="district_id" (ionChange)="getconstency($event);"\n\n          [class.invalid]="submitted && h[\'district_id\'].errors">\n\n          <ion-option value="" disabled>సెలెక్ట్ జిల్లా</ion-option>\n\n          <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n        </ion-select>\n\n        <div *ngIf="submitted && h[\'district_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="h[\'district_id\'].errors[\'required\']">Districts is required</div>\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>సెలెక్ట్ నియోజకవర్గం <span style="color:red; ">*</span></ion-label>\n\n        <ion-select formControlName="constenncy_id" (ionChange)="getmandals($event);"\n\n          [class.invalid]="submitted && h[\'constenncy_id\'].errors">\n\n          <ion-option value="" disabled>సెలెక్ట్  నియోజకవర్గం</ion-option>\n\n          <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n        </ion-select>\n\n        <div *ngIf="submitted && h[\'constenncy_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="h[\'constenncy_id\'].errors[\'required\']">Constituency is required</div>\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>సెలెక్ట్ మండలం <span style="color:red; ">*</span></ion-label>\n\n        <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);"\n\n          [class.invalid]="submitted && h[\'mandal_id\'].errors">\n\n          <ion-option value="" disabled>సెలెక్ట్  మండలం</ion-option>\n\n          <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n        </ion-select>\n\n        <div *ngIf="submitted && h[\'mandal_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="h[\'mandal_id\'].errors[\'required\']">Mandals is required</div>\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button full (click)="search()" class="default-btn user-all-btn"\n\n            style="margin-top: 6px;"><b>Search</b></button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <button ion-button full (click)="reset()" class="default-btn user-all-btn"\n\n            style="margin-top: 6px;"><b>Reset</b></button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button full (click)="hidefrom()" class="default-btn user-all-btn" style="margin-top: 6px;"><b>Hide\n\n              Form</b></button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </ion-card>\n\n\n\n  <ion-row>\n\n    <ion-col size="12" *ngFor="let item of church">\n\n      <ion-card class="church-card">\n\n        <ion-card-header style="text-align: center;">\n\n          <ion-card-title>{{ item.church_name }}</ion-card-title>\n\n          <ion-card style="padding:2%"> <b>Prayer Day </b> : {{ item.day }}</ion-card>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h4 class="prayer-time">Prayer Time : {{ item.starttime }} - {{ item.endtime }}</h4>\n\n          <div class="social-links">\n\n            <a *ngIf="!item.location" (click)="of()" class="icon-link">\n\n              <ion-icon name="locate" aria-label="Location"></ion-icon>\n\n            </a>\n\n            <a *ngIf="item.location" [href]="item.location" target="_blank" class="icon-link">\n\n              <ion-icon name="locate-outline" aria-label="Location"></ion-icon>\n\n            </a>\n\n\n\n            <a *ngIf="!item.youtube" class="icon-link" (click)="of()">\n\n              <ion-icon name="logo-youtube" class="youtube-icon" aria-label="YouTube"></ion-icon>\n\n            </a>\n\n            <a *ngIf="item.youtube" [href]="item.youtube" target="_blank" class="icon-link">\n\n              <ion-icon name="logo-youtube" class="youtube-icon" aria-label="YouTube"></ion-icon>\n\n            </a>\n\n\n\n            <a *ngIf="!item.facebook" class="icon-link" (click)="of()">\n\n              <ion-icon name="logo-facebook" class="facebook-icon" aria-label="Facebook"></ion-icon>\n\n            </a>\n\n            <a *ngIf="item.facebook" [href]="item.facebook" target="_blank" class="icon-link">\n\n              <ion-icon name="logo-facebook" class="facebook-icon" aria-label="Facebook"></ion-icon>\n\n            </a>\n\n\n\n            <a *ngIf="!item.contactnumber" class="icon-link" (click)="of()">\n\n              <ion-icon name="call" aria-label="Call"></ion-icon>\n\n            </a>\n\n            <a *ngIf="item.contactnumber" [href]="\'tel:+91\' + item.contactnumber" class="icon-link">\n\n              <ion-icon name="call" aria-label="Call"></ion-icon>\n\n            </a>\n\n          </div>\n\n          <p class="readmore" (click)="toggleDisplayDiv()">{{ isShowDiv ? \'READ LESS\' : \'READ MORE\' }}</p>\n\n          <div *ngIf="isShowDiv">\n\n            <p><strong>Local Address : </strong> {{ item.street }}</p>\n\n            <p><strong>Description : </strong> {{ item.description }}</p>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\church-timings\church-timings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ChurchTimingsPage);
    return ChurchTimingsPage;
}());

//# sourceMappingURL=church-timings.js.map

/***/ })

});
//# sourceMappingURL=36.js.map