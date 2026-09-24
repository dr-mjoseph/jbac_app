webpackJsonp([21],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistryPageModule", function() { return MinistryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ministry__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinistryPageModule = /** @class */ (function () {
    function MinistryPageModule() {
    }
    MinistryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ministry__["a" /* MinistryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ministry__["a" /* MinistryPage */]),
            ],
        })
    ], MinistryPageModule);
    return MinistryPageModule;
}());

//# sourceMappingURL=ministry.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinistryPage; });
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




/**
 * Generated class for the MinistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinistryPage = /** @class */ (function () {
    function MinistryPage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.ministryform = this.formBuilder.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            denomation: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            ministryemail: [''],
            ministrywebsite: [''],
            headnmber: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10)]],
            number_ofchurches: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            number_ofmembers: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            panchayat_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
            // retypepassword: ['', [Validators.required, Validators.minLength(6)]],
            pastor: [''],
            description: [''],
        });
        this.ministryform.reset();
    }
    MinistryPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
    };
    MinistryPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    MinistryPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    MinistryPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    MinistryPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    MinistryPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    MinistryPage.prototype.postministrysignup = function () {
        var _this = this;
        if (this.ministryform.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
        }
        else if (this.ministryform.value.password != this.ministryform.value.retypepassword) {
            alert("Passwords are Unmatched");
        }
        else {
            this.service.postministrysignup(this.ministryform.value).subscribe(function (res) {
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.ministryform.reset();
                }
                else {
                    alert('server down');
                }
            });
        }
    };
    MinistryPage.prototype.ministrypastorsfilterdata = function () {
        var _this = this;
        if (this.ministryform.value.district_id == null || this.ministryform.value.constituency_id == null || this.ministryform.value.mandal_id == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.ministryform.value.district_id,
                constituencyname: this.ministryform.value.constituency_id,
                mandal_id: this.ministryform.value.mandal_id,
            };
            this.service.getpastorsfilters(data).subscribe(function (res) {
                _this.getministrypastors = res.data;
            });
        }
    };
    // Accept Input As a Number Only
    MinistryPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    MinistryPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    MinistryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ministry',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\ministry\ministry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>మినిస్ట్రీ రిజిస్ట్రేషన్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="ministryform">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రిత్వం పేరు<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="firstname" placeholder="మీ పేరు నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'firstname\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'firstname\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'firstname\'].errors[\'required\']">మంత్రిత్వం పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్<span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="denomation" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'denomation\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of denomation" [value]="item.id">{{item.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'denomation\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'denomation\'].errors[\'required\']">డెనమినేషన్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రిత్వం ఇమెయిల్</ion-label>\n\n          <ion-input type="email" formControlName="ministryemail" placeholder="మీ ఇమెయిల్ నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'ministryemail\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'ministryemail\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'ministryemail\'].errors[\'required\']">మంత్రిత్వం ఇమెయిల్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మంత్రిత్వం వెబ్‌సైట్</ion-label>\n\n          <ion-input type="url" formControlName="ministrywebsite" placeholder="మీ వెబ్‌సైట్ నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'ministrywebsite\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'ministrywebsite\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'ministrywebsite\'].errors[\'required\']">మంత్రిత్వం వెబ్‌సైట్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>చర్చిలు / బ్రాంచుల నంబర్<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="number_ofchurches" class="form-control"\n\n            placeholder="మీ చర్చిల లేదా బ్రాంచుల నంబర్ను నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'number_ofchurches\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'number_ofchurches\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'number_ofchurches\'].errors[\'required\']">చర్చిలు / బ్రాంచుల నంబర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మొత్తం సభ్యుల నంబర్<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input type="text" formControlName="number_ofmembers" class="form-control"\n\n            placeholder="మొత్తం చర్చిలలో ఉన్న సభ్యుల నంబర్ను నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'number_ofmembers\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'number_ofmembers\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'number_ofmembers\'].errors[\'required\']">మొత్తం సభ్యుల నంబర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లాల ఎంచుకోండి <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event);" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'district_id\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'district_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'district_id\'].errors[\'required\']">జిల్లాల ఎంచుకోండి అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>కాన్స్టిట్యూన్సీ ఎంచుకోండి <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event);" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'constituency_id\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'constituency_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'constituency_id\'].errors[\'required\']">కాన్స్టిట్యూన్సీ ఎంచుకోండి అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాలను ఎంచుకోండి<span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'mandal_id\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'mandal_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'mandal_id\'].errors[\'required\']">మండలం అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయతీ ఎంచుకోండి <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="panchayat_id" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'panchayat_id\'].errors }">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'panchayat_id\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'panchayat_id\'].errors[\'required\']">పంచాయతీ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మంత్రి ఆంధ్రప్రదేశ్ రాష్ట్రపాల పేరు</ion-label>\n\n            <ion-select formControlName="pastor" (click)="ministrypastorsfilterdata()"\n\n              placeholder="మీ పాస్టర్‌ను ఎంచుకోండి" style="height:37px;width: 273px;">\n\n              <ion-option value="" disabled selected>మీ పాస్టర్‌ను ఎంచుకోండి</ion-option>\n\n              <ion-option *ngFor="let item of getministrypastors" [value]="item.id">{{item.pastorname}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>మంత్రి ఆంధ్రప్రదేశ్ రాష్ట్రపాల ఫోన్ నంబర్<span\n\n                style="color:red; ">*</span></ion-label>\n\n            <ion-input type="text" formControlName="headnmber"\n\n              placeholder="మీ ఆంధ్రప్రదేశ్ రాష్ట్రపాల ఫోన్ నంబర్‌ను నమోదు చేయండి"\n\n              [ngClass]="{\'is-invalid\': submitted && r[\'headnmber\'].errors }" maxlength="10" minlength="10"\n\n              (keypress)="numericOnly($event)"></ion-input>\n\n          </ion-item>\n\n          <div *ngIf="submitted && r[\'headnmber\'].errors" class="invalid-feedback">\n\n            <div *ngIf="r[\'headnmber\'].errors[\'required\']">ఫోన్ నంబర్ అవసరం</div>\n\n            <div *ngIf="r[\'headnmber\'].errors[\'maxLength\']">10 అంకెల నంబర్ అవసరం</div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వివరణ</ion-label>\n\n          <ion-input type="text" formControlName="description" placeholder="మీ వెబ్‌సైట్‌ను నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n     \n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంకేతపదం <span style="color:red; ">*</span></ion-label>\n\n          <ion-input type="password" formControlName="password" placeholder="మీ సంకేతపదం నమోదు చేయండి" maxlength="16"\n\n            minlength="6" [ngClass]="{\'is-invalid\': submitted && r[\'password\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'password\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'password\'].errors[\'required\']">సంకేతపదం అవసరం</div>\n\n          <div *ngIf="r[\'password\'].errors[\'minlength\']">సంకేతపదం 6 నుండి 16 అక్షరాలకు ఉండాలి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మళ్ళీ నమోదు చేసే సంకేతపదం <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-input type="password" formControlName="retypepassword" maxlength="16" minlength="6"\n\n            placeholder="మీ సంకేతపదం నమోదు చేయండి"\n\n            [ngClass]="{\'is-invalid\': submitted && r[\'retypepassword\'].errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && r[\'retypepassword\'].errors" class="invalid-feedback">\n\n          <div *ngIf="r[\'retypepassword\'].errors[\'required\']">మళ్ళీ నమోదు చేయుటకు సంకేతపదం అవసరం</div>\n\n          <div *ngIf="r[\'retypepassword\'].errors[\'minlength\']">సంకేతపదం 6 నుండి 16 అక్షరాలకు ఉండాలి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label>సంమతించడానికి మరియు సమాచారాన్ని పంపడానికి <span\n\n              style="color:red; ">*</span></ion-label>\n\n          <ion-checkbox slot="start" formControlName="term"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postministrysignup()" style="letter-spacing: 1px;">నమోదు\n\n            చేయండి</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\ministry\ministry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], MinistryPage);
    return MinistryPage;
}());

//# sourceMappingURL=ministry.js.map

/***/ })

});
//# sourceMappingURL=21.js.map