webpackJsonp([38],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationPageModule", function() { return AssociationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__association__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssociationPageModule = /** @class */ (function () {
    function AssociationPageModule() {
    }
    AssociationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__association__["a" /* AssociationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__association__["a" /* AssociationPage */]),
            ],
        })
    ], AssociationPageModule);
    return AssociationPageModule;
}());

//# sourceMappingURL=association.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationPage; });
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
 * Generated class for the AssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssociationPage = /** @class */ (function () {
    function AssociationPage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.submitted = false;
        this.form = this.formBuilder.group({
            pa_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            pastor_id: [''],
            level: [''],
            pa_president: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10)]],
            pa_secretory: [''],
            phonenumber: [''],
            std_phonenumber: [''],
            whatsapp_number: [''],
            totalleadrs: [''],
            address: [''],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            village_id: [''],
            website: [''],
            workingareas: [''],
            description: [''],
            password: [''],
            //retypepassword: ['', [Validators.required, Validators.minLength(6)]],
            term: [''],
        });
    }
    AssociationPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
        // this.getbelivers();
        // this.getbeliver();
        // this.getservice();
    };
    // getbelivers() {
    //   this.service.getbelivers().subscribe((res: any) => {
    //     this.bliversdata = res.data;
    //   })
    // }
    AssociationPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    AssociationPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    AssociationPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    AssociationPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    AssociationPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    AssociationPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    AssociationPage.prototype.postpastorassociations = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            alert('దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి ');
            return;
        }
        else {
            this.service.postpastorassociationss(this.form.value).subscribe(function (res) {
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else if (res.status == 200) {
                    alert('Submited Successfully');
                    _this.form.reset();
                    _this.submitted = false;
                }
            });
        }
    };
    // Accept Input As a Number Only
    AssociationPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    AssociationPage.prototype.pastorassociationpastorfilter = function () {
        var _this = this;
        if (this.form.value.district_id == null || this.form.value.constituency_id == null || this.form.value.mandal_id == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.form.value.district_id,
                constituencyname: this.form.value.constituency_id,
                mandal_id: this.form.value.mandal_id,
            };
            this.service.getpastorsfilters(data).subscribe(function (res) {
                _this.getpastorassciationas = res.data;
            });
        }
    };
    AssociationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-association',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\association\association.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 12px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>పాస్టర్ అస్సోసియేషన్ నమోదు</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="pagecss">\n\n\n\n  <form [formGroup]="form">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్ అస్సోసియేషన్ పేరు <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="pa_name" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"\n\n            required></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'pa_name\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'pa_name\').errors[\'required\']"> పాస్టర్ అస్సోసియేషన్ పేరు అవసరం\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్ల అస్సోసియేషన్ స్థాయి</ion-label>\n\n          <ion-select formControlName="level" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="మండల స్థాయి">మండల స్థాయి</ion-option>\n\n            <ion-option value="నియోజకవర్గ స్థాయి">నియోజకవర్గ స్థాయి</ion-option>\n\n            <ion-option value="జిల్లా స్థాయి">జిల్లా స్థాయి</ion-option>\n\n            <ion-option value="రాష్ట్ర స్థాయి">రాష్ట్ర స్థాయి</ion-option>\n\n            <ion-option value="జాతీయ స్థాయి">జాతీయ స్థాయి</ion-option>\n\n            <ion-option value="అంతర్జాతీయ స్థాయి">అంతర్జాతీయ స్థాయి</ion-option>\n\n            \n\n            \n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>ప్రెసిడెంట్ గారి ఫోన్ నంబర్ ఎంటర్ చేయండి</ion-label>\n\n          <ion-input formControlName="pa_president" placeholder="10 అంకెల ఫోన్ నంబర్ మాత్రమే ఎంటర్ చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అసోసియేషన్ సెక్రటరీ ఫోన్ నంబర్</ion-label>\n\n          <ion-input formControlName="pa_secretory" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      \n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ అసోసియేషన్ లో మొబైల్ యాప్స్ ఉపయోగించ గలిగే సేవకుడు ఫోన్ నంబర్</ion-label>\n\n          <ion-input formControlName="whatsapp_number" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ అసోసియేషన్ లో మొబైల్ యాప్స్ ఉపయోగించ గలిగే విశ్వవాసి ఫోన్ నంబర్ <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="phonenumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'phonenumber\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'phonenumber\').errors[\'required\']">\n\n            ప్రెసిడెంట్ గారి ఫోన్ నంబర్ ఎంటర్ చేయండి\n\n          </div>\n\n          <div *ngIf="form.get(\'phonenumber\').errors[\'maxlength\']">\n\n            10 అంకెల ఫోన్ నంబర్ మాత్రమే ఎంటర్ చేయండి\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ అసోసియేషన్ లో మొబైల్ యాప్స్ ఉపయోగించ గలిగే విద్యార్థి ఫోన్ నంబర్</ion-label>\n\n          <ion-input formControlName="std_phonenumber" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" maxlength="10"\n\n            minlength="10" (keypress)="numericOnly($event)"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ అసోసియేషన్ లో ఉన్న మొత్తం సభ్యుల సంఖ్య</ion-label>\n\n          <ion-input formControlName="totalleadrs"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ స్థానిక చిరునామా <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="address" placeholder="మీ స్ట్రీట్ పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'address\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'address\').errors[\'required\']"> చిరునామా అవసరం\n\n          </div>\n\n        </div>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లా <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)" placeholder="ఇక్కడ క్లిక్ చేసి జిల్లా ఎంచుకోండి">\n\n            <!-- <ion-option value="" disabled selected>ఈ క్రింది వాటిలో మీ జిల్లా ఎంచుకోండి</ion-option> -->\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'district_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'district_id\').errors[\'required\']"> జిల్లా ఎంచుకోండి\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)" placeholder="ఇక్కడ క్లిక్ చేసి నియోజకవర్గం ఎంచుకోండి">\n\n            <!-- <ion-option value="" disabled selected>ఈ క్రింది వాటిలో మీ నియోజకవర్గం ఎంచుకోండి</ion-option> -->\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'constituency_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'constituency_id\').errors[\'required\']"> నియోజకవర్గం ఎంచుకోండి\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం / మున్సిపాలిటీ <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);pastorassociationpastorfilter();"\n\n            placeholder="ఇక్కడ క్లిక్ చేసి మండలం ఎంచుకోండి">\n\n            <!-- <ion-option value="" disabled selected>ఈ క్రింది వాటిలో మీ మండలం ఎంచుకోండి</ion-option> -->\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'mandal_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'mandal_id\').errors[\'required\']"> మండలం / మున్సిపాలిటీ ఎంచుకోండి\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయితి  <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="village_id" placeholder="ఇక్కడ క్లిక్ చేసి పంచాయితి ఎంచుకోండి">\n\n            <ion-option value="" disabled selected>ఈ క్రింది వాటిలో మీ పంచాయితి ఎంచుకోండి</ion-option> \n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'village_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'village_id\').errors[\'required\']">పంచాయితి ఎంచుకోండి\n\n          </div>\n\n        </div>\n\n      </ion-col> -->\n\n    </ion-row>\n\n\n\n    <!-- <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>వెబ్‌సైట్</ion-label>\n\n          <ion-input formControlName="website" placeholder="వెబ్‌సైట్ నమోదు" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పని ప్రాంతాలు</ion-label>\n\n          <ion-input formControlName="workingareas" placeholder="మీ పని ప్రాంతాలు నమోదు" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>అసోసియేషన్ ఫేస్‌బుక్ పేజ్:</ion-label>\n\n          <ion-input formControlName="description" placeholder="వివరణ" type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked for="pastor_name">ముఖ్య పేరు <span style="color:red;">*</span></ion-label>\n\n          <ion-select formControlName="pastor_id">\n\n            <ion-option value="" disabled selected>పాస్టర్‌ను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let i of getpastorassciationas" [value]="i.id">{{i.pastorname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'pastor_id\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'pastor_id\').errors[\'required\']"> పాస్టర్ అవసరం\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row>\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెట్ పాస్‌వర్డ్  (పాస్‌వర్డ్ 4 నుండి 16 అక్షరాలు / అంకెలు) <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="password" placeholder="ఇక్కడ క్లిక్ చేసి పాస్‌వర్డ్ సెట్ చేసుకోండి" type="password" maxlength="16"\n\n            minlength="6"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'password\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'password\').errors[\'required\']"> పాస్‌వర్డ్ సెట్ చేసుకోండి</div>\n\n          <div *ngIf="form.get(\'password\').errors[\'minlength\']"> పాస్‌వర్డ్ 4 నుండి 16 అక్షరాలు / అంకెలు\n\n            మధ్య ఉండాలి\n\n          </div>\n\n        </div>\n\n      </ion-col> -->\n\n      <!-- <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మళ్ళీ పాస్‌వర్డ్ <span style="color:red;">*</span></ion-label>\n\n          <ion-input formControlName="retypepassword" placeholder="మీ మళ్ళీ పాస్‌వర్డ్ నమోదు చేయండి" type="password"\n\n            maxlength="16" minlength="6"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="submitted && form.get(\'retypepassword\').errors" class="invalid-feedback">\n\n          <div *ngIf="form.get(\'retypepassword\').errors[\'required\']"> పాస్‌వర్డ్ అవసరం</div>\n\n          <div *ngIf="form.get(\'retypepassword\').errors[\'minlength\']"> పాస్‌వర్డ్ 6 నుండి 16 అక్షరాలు / అంకెలు / విశేష\n\n            అక్షరాల మధ్య ఉండాలి\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <input type="checkbox" value="yes" formControlName="term">\n\n          <label> &nbsp; నేను సమాచారాన్ని భద్రపరచడానికి మరియు మీకు పంపడానికి ఒప్పందం</label>\n\n        </ion-item>\n\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postpastorassociations()" style="letter-spacing: 1px;">నమోదు\n\n            చేయండి</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\association\association.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], AssociationPage);
    return AssociationPage;
}());

//# sourceMappingURL=association.js.map

/***/ })

});
//# sourceMappingURL=38.js.map