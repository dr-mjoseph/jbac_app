webpackJsonp([35],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchPageModule", function() { return ChurchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__church__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChurchPageModule = /** @class */ (function () {
    function ChurchPageModule() {
    }
    ChurchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__church__["a" /* ChurchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__church__["a" /* ChurchPage */]),
            ],
        })
    ], ChurchPageModule);
    return ChurchPageModule;
}());

//# sourceMappingURL=church.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchPage; });
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




var ChurchPage = /** @class */ (function () {
    function ChurchPage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.submitted = false;
        this.form = this.formBuilder.group({
            church_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            denomination_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            total_members: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            village_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            street: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            pastor_id: [''],
            location: [''],
            contactnumber: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            description: [''],
            ministry_id: [''],
            churchtype: [''],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
            // retypepassword: ['', [Validators.required, Validators.minLength(6)]],
            facebook: [''],
            youtube: [''],
            remarks: [''],
            village_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
    }
    ChurchPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    ChurchPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
        this.getbeliver();
    };
    ChurchPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    ChurchPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    ChurchPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    ChurchPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    ChurchPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    ChurchPage.prototype.getbeliver = function () {
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
    ChurchPage.prototype.postchurchregister = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.form.value);
        if (this.form.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            return;
        }
        else if (this.form.value.password != this.form.value.retypepassword) {
            alert("Passwords are Unmatched");
        }
        else {
            console.log(this.form.value);
            this.service.postchurchregister(this.form.value).subscribe(function (res) {
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else if (res.status == 200) {
                    alert('Your Church is Submited Successfully,Please Submit your Church Service Timings');
                    // this.router.navigate(['/profile'], { queryParams: { id: "1" } });
                    _this.form.reset();
                    _this.submitted = false;
                }
            });
        }
    };
    ChurchPage.prototype.churchpastorfilter = function () {
        var _this = this;
        if (this.form.value.district_id == null || this.form.value.constituency_id == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.form.value.district_id,
                constituencyname: this.form.value.constituency_id,
                mandal_id: this.form.value.mandal_id,
            };
            console.log(data);
            this.service.getpastorsfilters(data).subscribe(function (res) {
                _this.getchurchpastors = res.data;
            });
        }
    };
    ChurchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-church',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\church\church.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>చర్చి రిజిస్ట్రేషన్</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="form">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>చర్చి పేరు <span style="color: red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="church_name" required\n\n            placeholder="మీ చర్చి పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'church_name\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'church_name\').errors[\'required\']"> చర్చి పేరు అవసరం </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సంప్రదించండి నంబర్ <span style="color: red;">*</span></ion-label>\n\n          <ion-input type="tel" formControlName="contactnumber" placeholder="మీ సంప్రదించండి నంబర్ నమోదు చేయండి"\n\n            maxlength="10" minlength="10"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'contactnumber\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'contactnumber\').errors[\'required\']">సంప్రదించండి నంబర్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మొత్తం చర్చి సభ్యులు <span style="color: red;">*</span></ion-label>\n\n          <ion-input type="number" formControlName="total_members"\n\n            placeholder="మీ మొత్తం చర్చి సభ్యుల నంబర్ నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'total_members\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'total_members\').errors[\'required\']">మొత్తం చర్చి సభ్యులు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్‌<span style="color: red;">*</span></ion-label>\n\n          <ion-select formControlName="denomination_id" placeholder="దేనోమినేషన్ ఎంచుకోండి">\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'denomination_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'denomination_id\').errors[\'required\']">దేనోమినేషన్ అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n          <ion-label stacked>చర్చి టైపు <span style="color:red;"> * </span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="Ministry" formControlName="churchtype">\n\n            <label>మెయిన్ లైన్ / మినిస్ట్రీ చర్చి</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="Independentchurch" formControlName="churchtype" />\n\n            <label>స్వతంత్ర చర్చి </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 *ngIf="form.get(\'churchtype\').value === \'Ministry\'">\n\n        <ion-item>\n\n          <ion-label stacked>మీ మెయిన్ లైన్ / మినిస్ట్రీ చర్చి సెలెక్ట చేయండి</ion-label>\n\n          <ion-select formControlName="ministry_id">\n\n            <ion-option *ngFor="let i of ministryname" [value]="i.id">{{i.ministryname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-list style="text-align: center;font-weight: 900;"> చిరునామా</ion-list>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లా ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'district_id\').errors }">\n\n            <ion-option value="" selected disabled>ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'district_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'district_id\').errors[\'required\']">జిల్లా ఎంచుకోండి</div>\n\n        </div>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event);"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'constituency_id\').errors }">\n\n            <ion-option value="" selected disabled>ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'constituency_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'constituency_id\').errors[\'required\']">సిటువేషన్సీ ఎంచుకోండి</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలాన్ని ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);churchpastorfilter();"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'mandal_id\').errors }">\n\n            <ion-option value="" selected disabled>ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'mandal_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'mandal_id\').errors[\'required\']">మండలాన్ని ఎంచుకోండి</div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయతీని ఎంచుకోండి <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="village_id"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'village_id\').errors }">\n\n            <ion-option value="" selected disabled>ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'village_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'village_id\').errors[\'required\']">పంచాయితీ ఎంచుకోండి</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>గూగుల్ లొకేషన్</ion-label>\n\n          <ion-input type="text" formControlName="location" placeholder="మీ లొకేషన్ ని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వీధి పేరు నమోదు చేయండి<span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="street" placeholder="వీధి పేరు"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'street\').errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'street\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'street\').errors[\'required\']">వీధి పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్ పేరు (ఇంటి పేరు తో సహా)<span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="pastor_id"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'pastor_id\').errors }">\n\n            <ion-option *ngFor="let i of getchurchpastors" [value]="i.id">{{i.pastorname }}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'pastor_id\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'pastor_id\').errors[\'required\']">పాస్టర్ పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- Facebook and Youtube inputs -->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఫేస్‌బుక్</ion-label>\n\n          <ion-input type="text" formControlName="facebook" placeholder="మీ ఫేస్‌బుక్ ని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>యూట్యూబ్</ion-label>\n\n          <ion-input type="text" formControlName="youtube" placeholder="మీ యూట్యూబ్ ని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- Village Name and Description inputs -->\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>గ్రామం పేరు <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="text" formControlName="village_name"\n\n            [ngClass]="{\'is-invalid\': submitted && form.get(\'village_name\').errors }"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'village_name\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'village_name\').errors[\'required\']">గ్రామం పేరు అవసరం</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ఇతర సమాచారం</ion-label>\n\n          <ion-textarea formControlName="description" placeholder="మీ వివరణ నమోదు చేయండి"></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్‌వర్డ్ <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="password" formControlName="password" placeholder="మీ పాస్‌వర్డ్‌ని నమోదు చేయండి"\n\n            maxlength="16" minlength="8"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'password\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'password\').errors[\'required\']">పాస్‌వర్డ్ అవసరం</div>\n\n          <div *ngIf="form.get(\'password\').errors[\'minlength\']">పాస్‌వర్డ్ కనీసం 8 అక్షరాలు ఉండాలి</div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్వర్డ్ మళ్ళీ నమోదు చేయండి <span style="color:red;">*</span></ion-label>\n\n          <ion-input type="password" formControlName="retypepassword" placeholder="మీ పాస్‌వర్డ్ మళ్ళీ నమోదు చేయండి"\n\n            maxlength="16" minlength="6"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'retypepassword\').errors" class="error-message">\n\n          <div *ngIf="form.get(\'retypepassword\').errors[\'required\']">పాస్‌వర్డ్ మళ్ళీ నమోదు చేయాలి</div>\n\n          <div *ngIf="form.get(\'retypepassword\').errors[\'minlength\']">పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి</div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <input type="checkbox" value="yes" formControlName="term">\n\n          <label> &nbsp;&nbsp; మీరు అంగీకరిస్తున్నారు మరియు మీకు సమాచారం పంపించడానికి సంగ్రహిస్తున్నారు </label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postchurchregister()" style="letter-spacing: 1px;">నమోదు\n\n            చేయండి</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\church\church.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], ChurchPage);
    return ChurchPage;
}());

//# sourceMappingURL=church.js.map

/***/ })

});
//# sourceMappingURL=35.js.map