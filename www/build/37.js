webpackJsonp([37],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BelieverPageModule", function() { return BelieverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__believer__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BelieverPageModule = /** @class */ (function () {
    function BelieverPageModule() {
    }
    BelieverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__believer__["a" /* BelieverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__believer__["a" /* BelieverPage */]),
            ],
        })
    ], BelieverPageModule);
    return BelieverPageModule;
}());

//# sourceMappingURL=believer.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BelieverPage; });
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




var BelieverPage = /** @class */ (function () {
    // <span style="color:red;"> *</span>
    function BelieverPage(navCtrl, navParams, formBuilder, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.showSpinner = false;
        this.extension = false;
        this.submitted = false;
        this.imagedata = [];
        this.lead = false;
        this.mini = false;
        this.assicoation = false;
        this.leadtype = false;
        this.wingtype = false;
        this.wingtypes = false;
        this.subward = false;
        this.father = false;
        this.form = this.formBuilder.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            whatsapp: [''],
            dob: [''],
            gender: ['',],
            mobile_number: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            status: [''],
            income: [''],
            caste: [''],
            subcaste: [''],
            nativeplace: [''],
            talent: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            education: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            designation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dpartment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            districts: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            mandals: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            panchayati: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            constituencyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            villagename: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            wardnumber: [''],
            ward: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            nri: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            leadership: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            leadertype: [''],
            generaltype: [''],
            subward: [''],
            wingtype: [''],
            denomination_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            hobbies: [''],
            spirit: [''],
            lifegoal: [''],
            church: [''],
            pastor: [''],
            youtube: [''],
            lname: [''],
            god: [''],
            term: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            retypepassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
        this.form.reset();
    }
    BelieverPage.prototype.gotohome = function () {
        this.navCtrl.push('FormsPage');
    };
    BelieverPage.prototype.ionViewDidLoad = function () {
        this.getdistric();
        this.getdenomations();
    };
    BelieverPage.prototype.getdistric = function () {
        var _this = this;
        this.service.getdistrict().subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    BelieverPage.prototype.getmandals = function (event) {
        var _this = this;
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
        });
    };
    BelieverPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = res.data;
        });
    };
    BelieverPage.prototype.getconstency = function (event) {
        var _this = this;
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
        });
    };
    BelieverPage.prototype.gepanchayati = function (event) {
        var _this = this;
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.panchayati = res.data.filter(function (data) { return data.mndl_id == id; });
        });
    };
    BelieverPage.prototype.getpastorsdata = function () {
        var _this = this;
        if (this.beliverform.value.districts == null || this.beliverform.value.constituencyname == null || this.beliverform.value.mandals == null) {
            alert("Please Fill the Districts, Constituency & Mandal");
        }
        else {
            var data = {
                districts: this.beliverform.value.districts,
                constituencyname: this.beliverform.value.constituencyname,
                mandal_id: this.beliverform.value.mandals,
            };
            this.service.getpastorsfilters(data).subscribe(function (res) {
                _this.getpastorsdatas = res.data;
            });
        }
    };
    BelieverPage.prototype.onradiochange = function (event) {
        var a = event.target.value;
        console.log(a);
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
    BelieverPage.prototype.onsubward = function (event) {
        var s = event;
        if (s == '6') {
            this.subward = true;
        }
        else {
            this.subward = false;
        }
    };
    BelieverPage.prototype.onradioleadertype = function (event) {
        var a = event.target.value;
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
    BelieverPage.prototype.postbeliversignup = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            var confirm_1 = this.alertCtrl.create({
                mode: 'ios',
                title: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి.!'
            });
            confirm_1.present();
            setTimeout(function () { confirm_1.dismiss(); }, 2000);
        }
        else if (this.form.value.password != this.form.value.retypepassword) {
            alert("Passwords are Unmatched");
        }
        else {
            console.log(this.form.value);
            this.service.postbeliver(this.form.value).subscribe(function (res) {
                if (res.status == 451) {
                    alert('ఇదే ఫోన్ నెంబర్ తో ఇంతకుముందే రిజిస్టర్ అయ్యారు');
                }
                else if (res.status == 200) {
                    alert('విజయవంతముగా సబ్మిట్ అయింది');
                    _this.form.reset();
                    _this.submitted = false;
                }
                else {
                    alert('server down');
                }
            });
        }
    };
    BelieverPage.prototype.togglePasswordVisibility = function (inputField) {
        var input = document.querySelector("ion-input[formControlName='" + inputField + "'] input");
        var icon = document.querySelector("ion-input[formControlName='" + inputField + "'] ion-icon");
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
            icon.setAttribute('name', 'eye-off');
        }
        else {
            input.setAttribute('type', 'password');
            icon.setAttribute('name', 'eye');
        }
    };
    BelieverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-believer',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\believer\believer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b><u>విశ్వాసి నమోదు </u><br> (ఏ పొజిషన్ లో వున్నా, <br> పాస్టర్ కాని వారు అందరు)</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="form" class="form-container">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>పేరు(ఇంటి పేరు తో సహా) <span style="color:red; "> *</span></ion-label>\n\n          <ion-input formControlName="fname" placeholder="పేరు నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n        <ion-note *ngIf="form.get(\'fname\').invalid && form.get(\'fname\').touched" color="danger">\n\n          పేరు తప్పనిసరి\n\n        </ion-note>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>జెండర్</ion-label>\n\n          <ion-select formControlName="gender">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి సెలెక్ట చేయండి</ion-option>\n\n            <ion-option value="male">పురుషుడు</ion-option>\n\n            <ion-option value="female">స్త్రీ</ion-option>\n\n            <ion-option value="transgender">ట్రాన్స్ జెండర్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-note *ngIf="form.get(\'gender\').invalid && form.get(\'gender\').touched" color="danger">\n\n          జెండర్ సెలెక్ట చేయండి \n\n        </ion-note>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మొబైల్ నంబర్<span style="color:red; "> *</span></ion-label>\n\n          <ion-input type="tel" formControlName="mobile_number" placeholder="ఇక్కడ క్లిక్ చేసి నమోదు చేయండి"\n\n            maxlength="10" minlength="10"></ion-input>\n\n        </ion-item>\n\n        <ion-note *ngIf="form.get(\'mobile_number\').invalid && form.get(\'mobile_number\').touched" color="danger">\n\n          మొబైల్ నంబర్  నమోదు చేయండి\n\n        </ion-note>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>వాట్స్ యాప్</ion-label>\n\n          <ion-input type="tel" formControlName="whatsapp" placeholder="WhatsApp నంబర్ నమోదు చేయండి" maxlength="10"\n\n            minlength="10"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-note *ngIf="form.get(\'whatsapp\').invalid && form.get(\'whatsapp\').touched" color="danger">\n\n          ఈ ఫీల్డ్ తప్పనిసరి\n\n        </ion-note> -->\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>పుట్టినరోజు</ion-label>\n\n          <ion-input type="date" formControlName="dob"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-note *ngIf="form.get(\'dob\').invalid && form.get(\'dob\').touched" color="danger">\n\n        పుట్టినరోజు తప్పనిసరి\n\n      </ion-note>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మీ ఆధ్యాత్మిక స్థితి</ion-label>\n\n          <ion-select formControlName="spirit">\n\n            <ion-option value="" disabled selected>ఆధ్యాత్మిక స్థితి ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="practicingchristian">ప్రాక్టీసింగ్ క్రిస్టియన్</ion-option>\n\n            <ion-option value="nominalchristian">నామినల్ క్రిస్టియన్</ion-option>\n\n            <ion-option value="festivalchristian">ఫెస్టివల్ క్రిస్టియన్</ion-option>\n\n            <ion-option value="justbelievingjesus">జస్ట్ బిలీవింగ్ జీసస్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>దేవునికి</ion-label>\n\n          <ion-select formControlName="god">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n            <ion-option value="Music">సంగీతం</ion-option>\n\n            <ion-option value="Dance">నృత్యం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>జీవిత లక్ష్యం</ion-label>\n\n          <ion-input type="text" formControlName="lifegoal" placeholder="మీ జీవిత లక్ష్యాన్ని నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఆసక్తిలు</ion-label>\n\n          <ion-select formControlName="hobbies">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="Singing">పాటలు పాడడం</ion-option>\n\n            <ion-option value="Designing">రూపకలా</ion-option>\n\n            <ion-option value="Writer">రచయిత</ion-option>\n\n            <ion-option value="readingbooks">పుస్తకాలు చదవడం</ion-option>\n\n            <ion-option value="servingpeople">ప్రజలకు సేవ చేయడం</ion-option>\n\n            <ion-option value="music">సంగీతం</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మీ వివాహ స్థితి</ion-label>\n\n          <ion-select formControlName="status">\n\n            <ion-option value="" disabled selected>మీ వివాహ స్థితిని ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="వివాహం కాలేదు">వివాహం కాలేదు</ion-option>\n\n            <ion-option value="వివాహం అయినది">వివాహం అయినది</ion-option>\n\n            <ion-option value="విడాకులు అయినది">విడాకులు అయినది</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>సెలెక్ట్ డినామినేషన్ మోడల్‌ <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="denomination_id" placeholder="డినామినేషన్ ఎంపిక చేయండి">\n\n            <ion-option value="" disabled>డినామినేషన్ ఎంపిక చేయండి</ion-option>\n\n            <ion-option *ngFor="let i of denomation" [value]="i.id">{{i.denomation_name}}\n\n            </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>టాలెంట్థాయి <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="talent" placeholder="నేర్చుకోండి"\n\n            [ngClass]="{\'is-invalid\': submitted && form.controls[\'talent\'].errors}">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="Speaker">స్పీకర్</ion-option>\n\n            <ion-option value="Writer">రచయిత</ion-option>\n\n            <ion-option value="Singer">గాయకుడు</ion-option>\n\n            <ion-option value="Others">ఇతర</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>విద్య <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="education" placeholder="విద్య ఎంపిక చేయండి">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="1-5">1-5</ion-option>\n\n            <ion-option value="6-10">6-10</ion-option>\n\n            <ion-option value="ITI">ఐటిఐ</ion-option>\n\n            <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n            <ion-option value="Inter">ఇంటర్</ion-option>\n\n            <ion-option value="Degree">డిగ్రీ</ion-option>\n\n            <ion-option value="Medical">మెడికల్</ion-option>\n\n            <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n            <ion-option value="PG">పిజి</ion-option>\n\n            <ion-option value="PHD">పిఎచ్‌డి</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked> అవధిని ఎంపిక చేయండి <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="designation" placeholder="అవధిని ఎంపిక చేయండి">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="1-5">1-5</ion-option>\n\n            <ion-option value="6-10">6-10</ion-option>\n\n            <ion-option value="ITI">ఐటిఐ</ion-option>\n\n            <ion-option value="Diploma">డిప్లొమా</ion-option>\n\n            <ion-option value="Inter">ఇంటర్</ion-option>\n\n            <ion-option value="Degree">డిగ్రీ</ion-option>\n\n            <ion-option value="Medical">మెడికల్</ion-option>\n\n            <ion-option value="Engineering">ఇంజనీరింగ్</ion-option>\n\n            <ion-option value="PG">పిజి</ion-option>\n\n            <ion-option value="PHD">పిఎచ్‌డి</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>విభాగం<span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="dpartment" placeholder="విభాగం ఎంపిక చేయండి">\n\n            <ion-option value="" disabled selected>విభాగం ఎంపిక చేయండి</ion-option>\n\n          \n\n            <ion-option value="Education">ఎడ్యుకేషన్</ion-option>\n\n            <ion-option value="Police">పోలీసు</ion-option>\n\n            <ion-option value="Advocate">అడ్వకేట్</ion-option>\n\n            <!-- <ion-option value="School">స్కూలు</ion-option>\n\n            <ion-option value="College">కళాశాల</ion-option>\n\n            <ion-option value="Cultivation">వ్యవసాయం</ion-option> -->\n\n            <ion-option value="Paper media">పేపర్ మీడియా</ion-option>\n\n            <ion-option value="Electronic media">ఎలక్ట్రానిక్ మీడియా</ion-option>\n\n            <ion-option value="Social media">సోషల్ మీడియా</ion-option>\n\n            <ion-option value="Real estate">రియల్ ఎస్టేట్</ion-option>\n\n            <ion-option value="Construction">కన్స్ట్రక్షన్</ion-option>\n\n                <ion-option value="Other">ఇతర</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఎంపిక జిల్లా <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="districts" (ionChange)="getconstency($event)">\n\n            <ion-option value="" disabled selected>ఎంపిక జిల్లా</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఎంపిక నియోజకవర్గం <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="constituencyname" (ionChange)="getmandals($event)">\n\n            <ion-option value="" disabled selected>ఎంపిక నియోజకవర్గం</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం/పంచాయతి <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="mandals" (ionChange)="gepanchayati($event);">\n\n            <ion-option value="" disabled selected>మండలం / పంచాయతి ఎంపిక చేయండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఎంపిక పంచాయితి/వార్డు <span style="color:red; "> *</span></ion-label>\n\n          <ion-select formControlName="panchayati">\n\n            <ion-option value="" disabled selected>ఎంపిక పంచాయితి/వార్డు</ion-option>\n\n            <ion-option *ngFor="let item of panchayati" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <!-- Village Name/Street Name Form Group -->\n\n        <ion-item>\n\n          <ion-label stacked>గ్రామం పేరు / స్ట్రీట్ పేరు <span style="color:red; "> *</span></ion-label>\n\n          <ion-input type="text" formControlName="villagename" placeholder="మీ గ్రామం పేరును నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <!-- Ward Number Form Group -->\n\n        <ion-item>\n\n          <ion-label stacked>వార్డ్ నంబర్</ion-label>\n\n          <ion-input type="text" formControlName="wardnumber" placeholder="వార్డ్ నంబర్ నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <!-- Local Address/House Number Form Group -->\n\n        <ion-item>\n\n          <ion-label stacked>మీ స్థానిక చిరునామా / హౌస్ నంబర్ <span style="color:red; "> *</span></ion-label>\n\n          <ion-input type="text" formControlName="ward" placeholder="మీ స్ట్రీట్ పేరును నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <!-- Living From Form Group -->\n\n        <ion-item>\n\n          <ion-label stacked>నివాసం ముందు<span style="color:red; ">*</span></ion-label>\n\n          <ion-select formControlName="nri" placeholder="నివాసం ముందు ఎంపిక చేయండి">\n\n            <ion-option value="" disabled selected>రకం ఎంపిక చేయండి</ion-option>\n\n            <ion-option value="NRI">NRI</ion-option>\n\n            <ion-option value="NON-NRI">NON-NRI</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్టర్‌ను ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="pastor" interface="popover" (ionChange)="getpastorsdata()">\n\n            <ion-option value="" disabled selected>మీ పాస్టర్‌ను ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getpastorsdatas" [value]="item.id">{{item.pastorname}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>చర్చిని ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="church" interface="popover" (ionChange)="getchurchesdata()">\n\n            <ion-option value="" disabled selected>చర్చి పేరును ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getchurchfilter" [value]="item.id">{{item.church_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row> -->\n\n\n\n\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-list>\n\n          <ion-label stacked>నాయకుడు అయితే కావాలా? <span style="color:red; "> *</span></ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="YES" (click)="onradiochange($event)" formControlName="leadership">\n\n            <label> అవును </label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="NO" (click)="onradiochange($event)" formControlName="leadership" />\n\n            <label> కాదు </label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-12 col-md-6 *ngIf="lead">\n\n        <ion-list>\n\n          <ion-label stacked>నాయకత్వం</ion-label>\n\n          <ion-item>\n\n            <input type="radio" value="1" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n            <label>జనరల్</label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <input type="radio" value="2" (click)="onradioleadertype($event)" formControlName="leadertype">\n\n            <label>వింగ్</label>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 *ngIf="leadtype" (click)="onsubward($event)">\n\n        <ion-item>\n\n          <ion-label stacked>జనరల్ నాయకత్వం లెవెల్</ion-label>\n\n          <ion-select formControlName="generaltype">\n\n            <ion-option value="">జనరల్ నాయకత్వం ఎంచుకోండి</ion-option>\n\n            <ion-option value="1">జిల్లా</ion-option>\n\n            <ion-option value="2">నియమకం</ion-option>\n\n            <ion-option value="3">మండలం</ion-option>\n\n            <ion-option value="4">గ్రామం</ion-option>\n\n            <ion-option value="5">వార్డ్</ion-option>\n\n            <ion-option value="6">సబ్ వార్డ్</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 *ngIf="subward">\n\n        <ion-item>\n\n          <ion-label stacked>ఉప వార్డ్ పేరు</ion-label>\n\n          <ion-input type="text" formControlName="subward" placeholder="మీ ఉప వార్డ్ నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 *ngIf="wingtype">\n\n        <ion-item>\n\n          <ion-label stacked>వింగ్ నాయకత్వం లెవెల్</ion-label>\n\n          <ion-select formControlName="wingtype">\n\n            <ion-option value="">వింగ్ నాయకత్వం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of wings" [value]="item.id">{{item.position}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>యూట్యూబ్ ఛానల్</ion-label>\n\n          <ion-input type="text" formControlName="youtube" placeholder="మీ యూట్యూబ్ ఛానల్ ఎంటర్ చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఇతర సమాచారం</ion-label>\n\n          <ion-input type="text" formControlName="lname" placeholder="ఇతర సమాచారం నమోదు చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>స్థానిక ప్రాంతం</ion-label>\n\n          <ion-input type="text" formControlName="nativeplace"\n\n            placeholder="మీ స్థానిక ప్రాంతం ఎంటర్ చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>నెలకు ఆదాయం</ion-label>\n\n          <ion-input type="text" formControlName="income" placeholder="మీ నెలకు ఆదాయం ఎంటర్ చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మీ కులం</ion-label>\n\n          <ion-select formControlName="caste">\n\n            <ion-option value="">జాతి ఎంచుకోండి</ion-option>\n\n            <ion-option value="no">జాతి లేదు</ion-option>\n\n            <ion-option value="SC">ఎస్సీ</ion-option>\n\n            <ion-option value="ST">ఎస్టీ</ion-option>\n\n            <ion-option value="BC-A">బిస్సి-ఎ</ion-option>\n\n            <ion-option value="BC-B">బిస్సి-బి</ion-option>\n\n            <ion-option value="BC-C">బిస్సి-సి</ion-option>\n\n            <ion-option value="BC-D">బిస్సి-డి</ion-option>\n\n            <ion-option value="BC-E">బిస్సి-ఇ</ion-option>\n\n            <ion-option value="OC">ఒస్సీ</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>ఉప జాతి</ion-label>\n\n          <ion-input type="text" formControlName="subcaste" placeholder="మీ ఉప జాతి ఎంటర్ చేయండి"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>పాస్‌వర్డ్<span style="color:red; "> * </span></ion-label>\n\n          <ion-input type="password" formControlName="password" placeholder="మీ పాస్‌వర్డ్ నమోదు చేయండి" maxlength="16"\n\n            minlength="6"></ion-input>\n\n          <ion-icon slot="end" name="eye" (click)="togglePasswordVisibility(\'password\')"></ion-icon>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <ion-label stacked>మళ్ళీ-పాస్వర్డ్<span style="color:red; "> * </span></ion-label>\n\n          <ion-input type="password" formControlName="retypepassword" placeholder="మీ పాస్‌వర్డ్ నమోదు చేయండి"\n\n            maxlength="16" minlength="6"></ion-input>\n\n          <ion-icon slot="end" name="eye" (click)="togglePasswordVisibility(\'retypepassword\')"></ion-icon>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <ion-item>\n\n          <input type="checkbox" value="yes" formControlName="term">\n\n          <label>స్టోర్ చేయడానికి మరియు మీకు సమాచారం పంపడానికి ఒప్పుకోండి <span style="color:red; "> *</span></label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n        <div style="text-align: center;">\n\n          <button ion-button color="secondary" (click)="postbeliversignup()" style="letter-spacing: 1px;">నమోదు\n\n            చేయండి</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\believer\believer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], BelieverPage);
    return BelieverPage;
}());

//# sourceMappingURL=believer.js.map

/***/ })

});
//# sourceMappingURL=37.js.map