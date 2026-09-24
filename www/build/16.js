webpackJsonp([16],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastorPageModule", function() { return PastorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pastor__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PastorPageModule = /** @class */ (function () {
    function PastorPageModule() {
    }
    PastorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pastor__["a" /* PastorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pastor__["a" /* PastorPage */]),
            ],
        })
    ], PastorPageModule);
    return PastorPageModule;
}());

//# sourceMappingURL=pastor.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastorPage; });
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




/**
 * Generated class for the PastorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PastorPage = /** @class */ (function () {
    function PastorPage(navCtrl, navParams, service, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.formBuilder = formBuilder;
        this.lead = false;
        this.mini = false;
        this.assicoation = false;
        this.leadtype = false;
        this.wingtype = false;
        this.wingtypes = false;
        this.subward = false;
        this.father = false;
        this.submitted = false;
        this.form = this.formBuilder.group({
            pastorname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            dob: [''],
            about_desp: [''],
            gender: [''],
            phonenumber: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)]],
            phonenumber2: [''],
            pa_phonenumber: [''],
            staus: [''],
            designation: [''],
            caste: [''],
            nativeplace: [''],
            talent: [''],
            education: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            panchayat_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            ward: [''],
            youtubechanel: [''],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
            //// retypepassword: ['', [Validators.required, Validators.minLength(6)]],
            leaders: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            leadertype: [''],
            generaltype: ['',],
            wingtype: ['',],
            facebook: [''],
            god: [''],
            //  // term: ['', [Validators.required]],
            lifegoal: [''],
            denomination_id: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            villagename: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            wingtypes: [''],
            pastortype: [''],
            ministry_id: [''],
            subward: [''],
            subcaste: ['']
        });
    }
    PastorPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
        this.getbelivers();
        this.getwing();
        // this.getservice();
    };
    PastorPage.prototype.getwing = function () {
        var _this = this;
        this.service.getwing().subscribe(function (res) {
            _this.wings = res.data;
        });
    };
    PastorPage.prototype.getbelivers = function () {
        var _this = this;
        this.service.getbelivers().subscribe(function (res) {
            _this.bliversdata = res.data;
        });
    };
    PastorPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    PastorPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    PastorPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    PastorPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    PastorPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    PastorPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    // Accept Input As a Number Only
    PastorPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    PastorPage.prototype.onradiochange = function (event) {
        var a = event.value;
        if (a == 'YES') {
            this.lead = true;
        }
        if (a == 'NO') {
            this.lead = false;
            this.leadtype = false;
            this.wingtype = false;
            this.wingtypes = false;
            this.subward = false;
        }
    };
    PastorPage.prototype.onparent = function (event) {
        var parents = event.value;
        if (parents == 'YES') {
            this.father = true;
        }
        else {
            this.father = false;
        }
    };
    PastorPage.prototype.subwardevent = function (event) {
    };
    PastorPage.prototype.onsubward = function (event) {
        var s = event;
        if (s == '6') {
            this.subward = true;
        }
        else {
            this.subward = false;
        }
    };
    PastorPage.prototype.onradioleadertype = function (event) {
        var a = event.value;
        if (a == '1') {
            this.leadtype = true;
            this.wingtype = false;
            this.wingtypes = false;
            this.subward = true;
        }
        else {
            this.leadtype = false;
            this.wingtype = true;
            this.wingtypes = true;
            this.subward = false;
        }
    };
    PastorPage.prototype.postchurchregister = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            alert('* ఉన్న తప్పనిసరి  ఫీల్డ్స్ ఎంటర్ చేయండి');
            return;
        }
        else {
            this.service.postpastor(this.form.value).subscribe(function (res) {
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else if (res.status == 200) {
                    alert(' విజయవంతముగా నమోదు చేయబడింది, మీ ఫోన్ నెంబర్ మరియు పాస్వర్డ్ తో లాగిన్ అవగలరు ');
                    // this.router.navigate(['/profile'], { queryParams: { id: "1" } });
                    _this.form.reset();
                    _this.submitted = false;
                }
            }, function (error) {
            });
        }
    };
    PastorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pastor',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\pastor\pastor.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;color:red"><b> <u>పాస్టర్ రిజిస్ట్రేషన్</u> </b></ion-title><br>\n\n    <ion-item>\n\n      <ion-label style="text-align: justify;">మేము సేకరించే మీ సమాచారం, గవర్నమెంట్ కి గాని ఎవరికీ గాని ఇవ్వబడదు. గవర్నమెంట్\n\n                                    పధకాలు & మీకు తగిన  సమాచారం పంపించడానికి మాత్రమే.</ion-label>\n\n    </ion-item>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="form">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పేరు(ఇంటి పేరు తో సహా)<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="pastorname" placeholder="మీ పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'pastorname\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'pastorname\').errors[\'required\']">మీ పేరు ఎంటర్ చేయండి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జెండర్</ion-label>\n\n          <ion-select formControlName="gender" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option value="పురుషుడు">పురుషుడు</ion-option>\n\n            <ion-option value="స్త్రీ">స్త్రీ</ion-option>\n\n            <ion-option value="ట్రాన్సజెండర్">ట్రాన్సజెండర్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'gender\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'gender\').errors[\'required\']">జెండర్ సెలెక్ట్ చేయండి</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫోన్ నంబర్<span style="color:red">*</span></ion-label>\n\n          <ion-input formControlName="phonenumber" placeholder="ఫోన్ నంబర్ నమోదు చేయండి" maxlength="10" minlength="10"\n\n            (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'phonenumber\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'phonenumber\').errors[\'required\']">ఫోన్ నంబర్ నమోదు చేయండి</div>\n\n          <div *ngIf="form.get(\'phonenumber\').errors[\'maxlength\']">10 అంకెల ఫోన్ నంబర్ నమోదు చేయండి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వాట్స్ యాప్ ఫోన్ నంబర్ </ion-label>\n\n          <ion-input formControlName="phonenumber2" placeholder="వాట్స్ యాప్ ఫోన్ నంబర్ నమోదు చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <!-- <div *ngIf="submitted && form.get(\'phonenumber2\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'phonenumber2\').errors[\'required\']">జెండర్ అవసరం</div> \n\n          <div *ngIf="form.get(\'phonenumber2\').errors[\'maxlength\']">10 అంకెల వాట్స్ యాప్ ఫోన్ నంబర్ నమోదు చేయండి</div>\n\n        </div> -->\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ అసిస్టెంట్ ఫోన్ నంబర్</ion-label>\n\n          <ion-input formControlName="pa_phonenumber" placeholder="మీ అసిస్టెంట్ నంబర్ నమోదు చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <!-- <div *ngIf="submitted && form.get(\'pa_phonenumber\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'pa_phonenumber\').errors[\'required\']">జంతువు అవసరం</div> \n\n          <div *ngIf="form.get(\'pa_phonenumber\').errors[\'maxlength\']">10 అంకెల మీ అసిస్టెంట్ నంబర్ నమోదు చేయండి</div>\n\n        </div> -->\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్<span style="color:red">*</span></ion-label>\n\n          <ion-select formControlName="denomination_id" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'denomination_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'denomination_id\').errors[\'required\']">డినామినేషన్ మోడల్ నమోదు చేయండి</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n\n\n        <ion-list>\n\n          <ion-label>మీ వివాహ స్థితి<span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం కాలేదు" formControlName="staus">\n\n            <label> వివాహం కాలేదు</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="వివాహం అయినది" formControlName="staus" />\n\n            <label> వివాహం అయినది </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="విడాకులు అయినది" formControlName="staus" />\n\n            <label> విడాకులు అయినది </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="విడాకులు అయినది" formControlName="staus" />\n\n            <label>ఎవరికివారే విడిగా ఉంటున్నాము </label>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <div *ngIf="submitted && form.get(\'staus\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'staus\').errors[\'required\']">మీ వివాహ స్థితి అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకత్వం</ion-label>\n\n          <ion-select formControlName="designation" placeholder="నియోజకత్వాన్ని ఎంచుకోండి">\n\n            <ion-option value="సైతంత్రిక">సైతంత్రిక</ion-option>\n\n            <ion-option value="పాస్టర్">పాస్టర్</ion-option>\n\n            <ion-option value="ఎస్ఆర్ పాస్టర్">ఎస్ఆర్ పాస్టర్</ion-option>\n\n            <ion-option value="రెవ్">రెవ్</ion-option>\n\n            <ion-option value="బిషప్">బిషప్</ion-option>\n\n            <ion-option value="ఆర్క్‌బిషప్">ఆర్క్‌బిషప్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'designation\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'designation\').errors[\'required\']">నియోజకత్వం అవసరం</div>\n\n        </div>\n\n      </ion-col> -->\n\n    </ion-row>\n\n\n\n    <br>\n\n    <ion-row>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విశేషం</ion-label>\n\n          <ion-select formControlName="talent" placeholder="విశేషం ఎంచుకోండి">\n\n            <ion-option value="స్పీకర్">స్పీకర్</ion-option>\n\n            <ion-option value="రచయిత">రచయిత</ion-option>\n\n            <ion-option value="పాడినవారు">పాడినవారు</ion-option>\n\n            <ion-option value="ఇతరమైనవారు">ఇతరమైనవారు</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked class="label1">మీ చదువు </ion-label>\n\n          <ion-select formControlName="education" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option value="1-5">1 వ తరగతి - 5 వ తరగతి</ion-option>\n\n            <ion-option value="6-10">6 వ తరగతి-10 వ తరగతి</ion-option>\n\n            <ion-option value="డిప్లొమా">డిప్లొమా</ion-option>\n\n            <ion-option value="ఇంటర్">ఇంటర్</ion-option>\n\n            <ion-option value="డిగ్రీ">డిగ్రీ</ion-option>\n\n            <ion-option value="మెడికల్">మెడికల్</ion-option>\n\n            <ion-option value="ఇంజనీరింగ్">ఇంజనీరింగ్</ion-option>\n\n            <ion-option value="పిజి">పిజి</ion-option>\n\n            <ion-option value="పిహెచ్‌డి">పిహెచ్‌డి</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div class="card" style="border-radius: 15px;">\n\n\n\n      <h4 style="padding-left: 15px;text-align: center;color: white;">చిరునామా</h4>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>జిల్లా ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="district_id" (ionChange)="getconstency($event)" i\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n              <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>నియోజకవర్గం ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)" i\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n              <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మండలం ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event)" i\n\n              placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n              <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>పంచాయతీ ఎంచుకోండి<span style="color:red">*</span></ion-label>\n\n            <ion-select formControlName="panchayat_id" i placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n              <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>గ్రామం పేరు / స్ట్రీట్ పేరు<span style="color:red">*</span></ion-label>\n\n            <ion-input formControlName="villagename" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మీ స్థానిక చిరునామా నమోదు చేయండి</ion-label>\n\n            <ion-input formControlName="ward" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label>పాస్టర్ కేటగిరి <span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="Ministry" (ionSelect)="churchchange($event.target)" formControlName="pastortype">\n\n            <label>మినిస్ట్రీ ఆండర్ లో పాస్టర్ </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="Independent" (ionSelect)="churchchange($event.target)"\n\n              formControlName="pastortype" />\n\n            <label>ఇండిపెండెంట్ పాస్టర్</label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label>మీరు కోటిమంది క్రైస్తవ సమాజానికి ఏదైనా లెవెల్ లో లీడర్ గా వుండడం ఇష్టమా ?<span style="color:red;">\n\n              * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="YES" (click)="onradiochange($event.target)" formControlName="leaders">\n\n            <label>అవును</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="NO" (click)="onradiochange($event.target)" formControlName="leaders" />\n\n            <label>కాదు</label>\n\n          </ion-item>\n\n        </ion-list>\n\n        <div *ngIf="submitted && form.get(\'leaders\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'leaders\').errors[\'required\']">లీడర్ గా వుండడం ఇష్టమా , తప్పనిసరిగా సెలెక్ట్ చేయాలి</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 *ngIf="lead">\n\n        <ion-list>\n\n          <ion-label stacked>లీడర్ కేటగిరి ఎంచుకోండి<span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="1" (click)="onradioleadertype($event.target)" formControlName="leadertype">\n\n            <label>జనరల్ లీడర్</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="2" (click)="onradioleadertype($event.target)" formControlName="leadertype">\n\n            <label> వింగ్ లీడర్ </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="leadtype">\n\n        <ion-item>\n\n          <ion-label stacked>మీరు చేయగలిగిన జనరల్ లీడర్ షిప్ లెవెల్ ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="generaltype" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            (ionChange)="onsubward($event)">\n\n            <ion-option value="1">జిల్లా నాయకుడు</ion-option>\n\n            <ion-option value="2">నియోజకవర్గం నాయకుడు </ion-option>\n\n            <ion-option value="3">మండల నాయకుడు</ion-option>\n\n            <ion-option value="3">పంచాయతి నాయకుడు</ion-option>\n\n            <ion-option value="4">వార్డు నాయకుడు</ion-option>\n\n            <ion-option value="5">సబ్ వార్డ్ నాయకుడు</ion-option>\n\n            <ion-option value="6">చర్చి నాయకుడు</ion-option>\n\n            <ion-option value="7">పనిచేసేచోట నాయకుడు</ion-option>\n\n            <ion-option value="8">బందువుల నాయకుడు</ion-option>\n\n            <ion-option value="9">ఫ్రెండ్స్ నాయకుడు</ion-option>\n\n            <ion-option value="10">10 ఇళ్ల నాయకుడు</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 *ngIf="subward">\n\n        <ion-item>\n\n          <ion-label stacked>సబ్-వార్డు పరిధి</ion-label>\n\n          <ion-textarea formControlName="subward" type="text"\n\n            placeholder="ఎంటర్ చేయండి ఏ ఇంటి నెంబర్ నుంచి ఏ ఇంటి వరకు"></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!-- <ion-col col-12 *ngIf="wingtype">\n\n        <ion-item>\n\n          <ion-label stacked>వింగ్ నాయకుడు రకాలు</ion-label>\n\n          <ion-select formControlName="wingtype" i placeholder="వింగ్ నాయకుడు రకాలు ఎంచుకోండి">\n\n            <ion-option *ngFor="let item of wings" [value]="item.id">{{item.position}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col> -->\n\n      <ion-col col-12 *ngIf="wingtypes">\n\n        <ion-item>\n\n          <ion-label stacked>వింగ్ లీడర్ </ion-label>\n\n          <ion-select formControlName="wingtypes" placeholder="వింగ్ నాయకుడు ఎంచుకోండి">\n\n            <ion-option value="1">స్టూడెంట్ వింగ్</ion-option>\n\n            <ion-option value="2">బ్యూరోక్రాట్ వింగ్</ion-option>\n\n            <ion-option value="3">మెడికల్ వింగ్</ion-option>\n\n            <ion-option value="4">ఇంజనీరింగ్ వింగ్</ion-option>\n\n            <ion-option value="5">పోలీస్ వింగ్ & మిలిటరీ వింగ్</ion-option>\n\n            <ion-option value="6">అడ్వకేట్ వింగ్</ion-option>\n\n            <ion-option value="7">టీచింగ్ వింగ్</ion-option>\n\n            <ion-option value="8">బ్యాంకింగ్ వింగ్</ion-option>\n\n            <ion-option value="9">చార్టెడ్ అకౌంట్ వింగ్</ion-option>\n\n            <ion-option value="10">బిజినెస్ వింగ్</ion-option>\n\n            <ion-option value="11">గ్రూప్1 ఆఫీసర్ వింగ్</ion-option>\n\n            <ion-option value="12">గ్రూప్2 ఆఫీసర్ వింగ్</ion-option>\n\n            <ion-option value="13">గ్రూప్3 ఆఫీసర్ వింగ్</ion-option>\n\n            <ion-option value="14">గ్రూప్4 ఆఫీసర్ వింగ్</ion-option>\n\n            <ion-option value="15">ఎన్ జి ఓ వింగ్</ion-option>\n\n            <ion-option value="16">నిర్మాణ రంగం వింగ్ </ion-option>\n\n\n\n            <ion-option value="17">సాఫ్ట్ వెర్ వింగ్</ion-option>\n\n            <ion-option value="18">హౌస్ కీపింగ్ వింగ్ </ion-option>\n\n            <ion-option value="19">సోషల్ మీడియా వింగ్</ion-option>\n\n            <ion-option value="20">పేపర్ మీడియా వింగ్</ion-option>\n\n            <ion-option value="21">ఎలక్ట్రానిక్ మీడియా వింగ్ </ion-option>\n\n            <ion-option value="22">పొలిటికల్ వింగ్</ion-option>\n\n            <ion-option value="23">ఇతర వింగ్స్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!-- <ion-col col-12 *ngIf="leadtype">\n\n        <ion-item>\n\n          <ion-label stacked>మీరు చేయగలిగిన జనరల్ లీడర్ షిప్ లెవెల్ ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="generaltype" (ionChange)="onsubward($event)">\n\n            <ion-option value="జిల్లా నాయకుడు">జిల్లా నాయకుడు</ion-option>\n\n            <ion-option value="నియోజకవర్గం  నాయకుడు">నియోజకవర్గం  నాయకుడు  </ion-option>\n\n            <ion-option value="మండలం నాయకుడు">మండలం నాయకుడు</ion-option>\n\n            <ion-option value="పంచాయతి నాయకుడు">పంచాయతి నాయకుడు</ion-option>\n\n            <ion-option value="వార్డు నాయకుడు">వార్డు నాయకుడు</ion-option>\n\n            <ion-option value="పనిచేసేచోట నాయకుడు">పనిచేసేచోట నాయకుడు</ion-option>\n\n            <ion-option value="బందువుల నాయకుడు">బందువుల నాయకుడు</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n      </ion-col> -->\n\n\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ యూట్యూబ్ ఛానల్</ion-label>\n\n          <ion-input formControlName="youtubechanel" type="text"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ ఫేస్‌బుక్ ఛానల్</ion-label>\n\n          <ion-input formControlName="facebook" type="text" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఇతర సమాచారం</ion-label>\n\n          <ion-input formControlName="about_desp" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జీవిత లక్ష్యం</ion-label>\n\n          <ion-input formControlName="lifegoal" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ కులం</ion-label>\n\n          <ion-select formControlName="caste" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="No Caste">కులం లేదు</ion-option>\n\n            <ion-option value="ST">ఎస్టి (ST)</ion-option>\n\n            <ion-option value="OC">ఓసీ (OC)</ion-option>\n\n            <ion-option value="SC - A">ఎస్సి - ఏ (SC - A)</ion-option>\n\n            <ion-option value="SC - B">ఎస్సి - బి (SC - B)</ion-option>\n\n            <ion-option value="SC - C">ఎస్సి - సి (SC - C)</ion-option>\n\n            <ion-option value="SC - D">ఎస్సి - డి (SC - D)</ion-option>\n\n            <ion-option value="BC - A">బిసి - ఏ (BC - A)</ion-option>\n\n            <ion-option value="BC - B">బిసి - బి (BC - B)</ion-option>\n\n            <ion-option value="BC - C">బిసి - సి (BC - C)</ion-option>\n\n            <ion-option value="BC - D">బిసి - డి (BC - D)</ion-option>\n\n            <ion-option value="BC - E">బిసి - ఇ (BC - E)</ion-option>\n\n\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఉప కులం </ion-label>\n\n          <ion-input formControlName="subcaste" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>క్రైస్తవ సమాజం & దేవుని కొరకు, మీరు ఏమి చేయగలరు</ion-label>\n\n          <ion-select formControlName="god" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="ప్రార్ధన చేస్తాను">ప్రార్ధన చేస్తాను</ion-option>\n\n            <ion-option value="డబ్బులు ఇవ్వగలను">డబ్బులు ఇవ్వగలను</ion-option>\n\n            <ion-option value="నా టాలెంట్ ఉపయోగించ గలను">నా టాలెంట్ ఉపయోగించ గలను</ion-option>\n\n            <ion-option value="సమయం ఇవ్వగలను">సమయం ఇవ్వగలను</ion-option>\n\n            <ion-option value="పని చేస్తాను">పని చేస్తాను</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>విపులంగా రాయండి, క్రైస్తవ సమాజం & దేవుని కొరకు ఏమి చేయగలరో </ion-label>\n\n          <ion-input formControlName="nativeplace" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్వర్డ్ సెట్ చేసుకోండి 6 నుంచి 16 వరకు లెటర్స్ ఉండవచ్చు<span\n\n              style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="password" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి" type="password"\n\n            maxlength="16" minlength="6"></ion-input>\n\n        </ion-item>\n\n\n\n        <!-- <div *ngIf="submitted && o[\'password\'].errors" class="invalid-feedback">\n\n            <div *ngIf="o[\'password\'].errors[\'required\']">Password is required</div>\n\n            <div *ngIf="o[\'password\'].errors[\'minlength\']">Password must be between 6 to 16 characters</div>\n\n          </div> -->\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పునరాహ్రిత-పాస్‌వర్డ్<span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="retypepassword" placeholder="మీ పునరాహ్రిత-పాస్‌వర్డ్‌ను నమోదు చేయండి"\n\n            type="password" maxlength="16" minlength="6"></ion-input>\n\n        </ion-item>\n\n\n\n         <div *ngIf="submitted && o[\'retypepassword\'].errors" class="invalid-feedback">\n\n            <div *ngIf="o[\'retypepassword\'].errors[\'required\']">Retype-Password is required</div>\n\n            <div *ngIf="o[\'retypepassword\'].errors[\'minlength\']">Password must be between 6 to 16 characters</div> \n\n          </div>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <!-- <br>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <input type="checkbox" value="yes" formControlName="term">\n\n          <br>\n\n          <label>&nbsp; నేను అంగీకరిస్తాను మరియు మీకు సమాచారాన్ని పంపించడానికి అనుమతిస్తాను</label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postchurchregister()"\n\n            style="letter-spacing: 1px;">రిజిస్టర్</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\pastor\pastor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], PastorPage);
    return PastorPage;
}());

//# sourceMappingURL=pastor.js.map

/***/ })

});
//# sourceMappingURL=16.js.map