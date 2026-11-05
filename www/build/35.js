webpackJsonp([35],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrepreneurPageModule", function() { return EntrepreneurPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrepreneur__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntrepreneurPageModule = /** @class */ (function () {
    function EntrepreneurPageModule() {
    }
    EntrepreneurPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrepreneur__["a" /* EntrepreneurPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrepreneur__["a" /* EntrepreneurPage */]),
            ],
        })
    ], EntrepreneurPageModule);
    return EntrepreneurPageModule;
}());

//# sourceMappingURL=entrepreneur.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
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




var EntrepreneurPage = /** @class */ (function () {
    function EntrepreneurPage(navCtrl, fb, alertCtrl, loadingCtrl, toastCtrl, service) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.showSpinner = false;
        // Personal Location Lists
        this.states = [];
        this.personalDistricts = [];
        this.personalConstituencies = [];
        this.personalMandals = [];
        this.personalPanchayatis = [];
        // Business Location Lists
        this.businessDistricts = [];
        this.businessConstituencies = [];
        this.businessMandals = [];
        this.businessPanchayatis = [];
        // Metadata
        this.businessTypes = [];
        this.denominations = [];
        this.entrepreneurForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            // Personal Address
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            districts: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            panchayati: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            // Business Setup Place
            business_state_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            business_districts: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            business_constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            business_mandals: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            business_panchayati: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            // Business & Finance
            business_type_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            denomination_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            self_fund: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            capital_need: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            description: ['']
        });
    }
    EntrepreneurPage.prototype.ionViewDidLoad = function () {
        this.loadStates();
        this.loadBusinessTypes();
        this.loadDenominations();
    };
    EntrepreneurPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    EntrepreneurPage.prototype.loadStates = function () {
        var _this = this;
        this.service.getstates().subscribe(function (res) {
            if (res && res.data) {
                _this.states = res.data;
            }
            else {
                _this.states = [
                    { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
                    { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
                ];
            }
        }, function () {
            _this.states = [
                { id: 1, state_name: 'Andhra Pradesh-ఆంధ్రప్రదేశ్ (AP)', name: 'Andhra Pradesh (AP)' },
                { id: 2, state_name: 'Telangana-తెలంగాణ (TG)', name: 'Telangana (TG)' }
            ];
        });
    };
    EntrepreneurPage.prototype.loadBusinessTypes = function () {
        var _this = this;
        this.service.getBusinessTypes().subscribe(function (res) {
            if (res && res.data) {
                _this.businessTypes = res.data;
            }
        }, function (err) { return console.log('Error loading business types', err); });
    };
    EntrepreneurPage.prototype.loadDenominations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            if (res && res.data) {
                _this.denominations = res.data;
            }
        }, function (err) { return console.log('Error loading denominations', err); });
    };
    // Personal Address Cascade
    EntrepreneurPage.prototype.onPersonalStateChange = function (stateId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            districts: '',
            constituencyname: '',
            mandals: '',
            panchayati: ''
        });
        this.personalDistricts = [];
        this.personalConstituencies = [];
        this.personalMandals = [];
        this.personalPanchayatis = [];
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.personalDistricts = (res && res.data) ? res.data : [];
            });
        }
    };
    EntrepreneurPage.prototype.onPersonalDistrictChange = function (distId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            constituencyname: '',
            mandals: '',
            panchayati: ''
        });
        this.personalConstituencies = [];
        this.personalMandals = [];
        this.personalPanchayatis = [];
        if (distId) {
            this.service.getconsistencys(distId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.personalConstituencies = list.filter(function (item) { return item.dstrct_id == distId; });
            });
        }
    };
    EntrepreneurPage.prototype.onPersonalConstituencyChange = function (constId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            mandals: '',
            panchayati: ''
        });
        this.personalMandals = [];
        this.personalPanchayatis = [];
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.personalMandals = list.filter(function (item) { return item.const_id == constId; });
            });
        }
    };
    EntrepreneurPage.prototype.onPersonalMandalChange = function (mandalId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            panchayati: ''
        });
        this.personalPanchayatis = [];
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.personalPanchayatis = list.filter(function (item) { return !mandalId || item.mndl_id == mandalId; });
            });
        }
    };
    // Business Setup Place Cascade
    EntrepreneurPage.prototype.onBusinessStateChange = function (stateId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            business_districts: '',
            business_constituencyname: '',
            business_mandals: '',
            business_panchayati: ''
        });
        this.businessDistricts = [];
        this.businessConstituencies = [];
        this.businessMandals = [];
        this.businessPanchayatis = [];
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.businessDistricts = (res && res.data) ? res.data : [];
            });
        }
    };
    EntrepreneurPage.prototype.onBusinessDistrictChange = function (distId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            business_constituencyname: '',
            business_mandals: '',
            business_panchayati: ''
        });
        this.businessConstituencies = [];
        this.businessMandals = [];
        this.businessPanchayatis = [];
        if (distId) {
            this.service.getconsistencys(distId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.businessConstituencies = list.filter(function (item) { return item.dstrct_id == distId; });
            });
        }
    };
    EntrepreneurPage.prototype.onBusinessConstituencyChange = function (constId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            business_mandals: '',
            business_panchayati: ''
        });
        this.businessMandals = [];
        this.businessPanchayatis = [];
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.businessMandals = list.filter(function (item) { return item.const_id == constId; });
            });
        }
    };
    EntrepreneurPage.prototype.onBusinessMandalChange = function (mandalId) {
        var _this = this;
        this.entrepreneurForm.patchValue({
            business_panchayati: ''
        });
        this.businessPanchayatis = [];
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.businessPanchayatis = list.filter(function (item) { return !mandalId || item.mndl_id == mandalId; });
            });
        }
    };
    EntrepreneurPage.prototype.submitEntrepreneur = function () {
        if (this.entrepreneurForm.invalid) {
            var alert_1 = this.alertCtrl.create({
                title: 'దయచేసి అన్ని వివరాలు పూరించండి',
                subTitle: 'Please fill all required fields before submitting.',
                buttons: ['సరే (OK)']
            });
            alert_1.present();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'నమోదు చేయబడుతుంది... (Submitting Entrepreneur Profile)...'
        });
        loader.present();
        var formVal = this.entrepreneurForm.value;
        var selPersonalState = this.states.find(function (s) { return s.id == formVal.state_id; });
        var selPersonalDist = this.personalDistricts.find(function (d) { return d.id == formVal.districts; });
        var selPersonalConst = this.personalConstituencies.find(function (c) { return c.id == formVal.constituencyname; });
        var selPersonalMndl = this.personalMandals.find(function (m) { return m.id == formVal.mandals; });
        var selPersonalPanch = this.personalPanchayatis.find(function (p) { return p.id == formVal.panchayati; });
        var selBizState = this.states.find(function (s) { return s.id == formVal.business_state_id; });
        var selBizDist = this.businessDistricts.find(function (d) { return d.id == formVal.business_districts; });
        var selBizConst = this.businessConstituencies.find(function (c) { return c.id == formVal.business_constituencyname; });
        var selBizMndl = this.businessMandals.find(function (m) { return m.id == formVal.business_mandals; });
        var selBizPanch = this.businessPanchayatis.find(function (p) { return p.id == formVal.business_panchayati; });
        var selBizType = this.businessTypes.find(function (t) { return t.id == formVal.business_type_id; });
        var selDenom = this.denominations.find(function (d) { return d.id == formVal.denomination_id; });
        var payload = {
            name: formVal.name,
            mobile: formVal.mobile,
            email: formVal.email,
            // Personal Address
            state_id: formVal.state_id,
            state_name: selPersonalState ? (selPersonalState.state_name || selPersonalState.name || '') : '',
            district_id: formVal.districts,
            district_name: selPersonalDist ? (selPersonalDist.distrct_nm || selPersonalDist.districtname || '') : '',
            constituency_id: formVal.constituencyname,
            constituency_name: selPersonalConst ? (selPersonalConst.const_nm || selPersonalConst.name || '') : '',
            mandal_id: formVal.mandals,
            mandal_name: selPersonalMndl ? (selPersonalMndl.mndl_nm || selPersonalMndl.name || '') : '',
            panchayat_id: formVal.panchayati,
            panchayat_name: selPersonalPanch ? (selPersonalPanch.pnchyt_nm || selPersonalPanch.name || '') : '',
            // Business Setup Location
            business_state_id: formVal.business_state_id,
            business_state_name: selBizState ? (selBizState.state_name || selBizState.name || '') : '',
            business_district_id: formVal.business_districts,
            business_district_name: selBizDist ? (selBizDist.distrct_nm || selBizDist.districtname || '') : '',
            business_constituency_id: formVal.business_constituencyname,
            business_constituency_name: selBizConst ? (selBizConst.const_nm || selBizConst.name || '') : '',
            business_mandal_id: formVal.business_mandals,
            business_mandal_name: selBizMndl ? (selBizMndl.mndl_nm || selBizMndl.name || '') : '',
            business_panchayat_id: formVal.business_panchayati,
            business_panchayat_name: selBizPanch ? (selBizPanch.pnchyt_nm || selBizPanch.name || '') : '',
            // Business & Finance
            business_type_id: formVal.business_type_id,
            business_type: selBizType ? (selBizType.business_type || '') : '',
            denomination_id: formVal.denomination_id,
            denomination: selDenom ? (selDenom.denomation_name || selDenom.denomination_name || '') : '',
            self_fund: formVal.self_fund,
            capital_need: formVal.capital_need,
            description: formVal.description
        };
        var self = this;
        this.service.registerEntrepreneur(payload).subscribe(function (res) {
            loader.dismiss();
            if (res && res.status === 200) {
                var successAlert = self.alertCtrl.create({
                    title: 'నమోదు పూర్తయింది! (Success)',
                    subTitle: 'మీ ఎంటర్‌ప్రెన్యూర్ ప్రొఫైల్ విజయవంతంగా నమోదు చేయబడింది. (Entrepreneur registration submitted successfully)',
                    buttons: [
                        {
                            text: 'సరే (OK)',
                            handler: function () {
                                self.navCtrl.setRoot('FormsPage');
                            }
                        }
                    ]
                });
                successAlert.present();
            }
            else {
                var msg = (res && res.message) ? res.message : 'Submission failed. Please try again.';
                var errAlert = self.alertCtrl.create({
                    title: 'విఫలమైంది (Failed)',
                    subTitle: msg,
                    buttons: ['సరే (OK)']
                });
                errAlert.present();
            }
        }, function () {
            loader.dismiss();
            var netAlert = self.alertCtrl.create({
                title: 'నెట్‌వర్క్ లోపం (Network Error)',
                subTitle: 'Unable to connect to server. Please try again.',
                buttons: ['సరే (OK)']
            });
            netAlert.present();
        });
    };
    EntrepreneurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\entrepreneur\entrepreneur.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title style="text-align: center; font-size: 15px;">\n      <b>ఎంటర్‌ప్రెన్యూర్ రిజిస్ట్రేషన్ (Entrepreneur)</b>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotohome()">\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pagecss">\n  <div class="form-card">\n    <div class="header-box">\n      <div style="font-size: 30px; margin-bottom: 6px;">🚀</div>\n      <h3 style="margin: 0; font-size: 16px; font-weight: bold;">వ్యాపార ఔత్సాహికుల నమోదు</h3>\n      <p style="margin: 4px 0 0 0; font-size: 11.5px; opacity: 0.9;">\n        నూతన వ్యాపార ఏర్పాటు & పెట్టుబడిదారుల సహాయం కొరకు (Startup & Financial Matching)\n      </p>\n    </div>\n\n    <form [formGroup]="entrepreneurForm" (ngSubmit)="submitEntrepreneur()">\n\n      <!-- SECTION 1: PERSONAL DETAILS -->\n      <div class="section-heading">1. వ్యక్తిగత వివరాలు (Personal Details)</div>\n\n      <ion-item class="custom-item">\n        <ion-label stacked>పూర్తి పేరు (Full Name) <span class="req">*</span></ion-label>\n        <ion-input type="text" formControlName="name" placeholder="ఉదా: Samuel Kumar"></ion-input>\n      </ion-item>\n\n      <ion-item class="custom-item">\n        <ion-label stacked>మొబైల్ నంబర్ (Mobile Number) <span class="req">*</span></ion-label>\n        <ion-input type="tel" maxlength="10" formControlName="mobile" placeholder="10 అంకెల మొబైల్ నంబర్"></ion-input>\n      </ion-item>\n\n      <ion-item class="custom-item">\n        <ion-label stacked>ఈమెయిల్ (Email Address)</ion-label>\n        <ion-input type="email" formControlName="email" placeholder="name@example.com"></ion-input>\n      </ion-item>\n\n      <!-- SECTION 2: PERSONAL RESIDENCE ADDRESS -->\n      <div class="section-heading">2. వ్యక్తిగత నివాస చిరునామా (Personal Residence)</div>\n\n      <!-- State -->\n      <ion-item class="custom-item">\n        <ion-label stacked>రాష్ట్రం (State) <span class="req">*</span></ion-label>\n        <ion-select formControlName="state_id" (ionChange)="onPersonalStateChange($event)" okText="సరే" cancelText="రద్దు" placeholder="రాష్ట్రాన్ని ఎంచుకోండి">\n          <ion-option *ngFor="let s of states" [value]="s.id">{{ s.state_name || s.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- District -->\n      <ion-item class="custom-item">\n        <ion-label stacked>జిల్లా (District) <span class="req">*</span></ion-label>\n        <ion-select formControlName="districts" (ionChange)="onPersonalDistrictChange($event)" [disabled]="!entrepreneurForm.get(\'state_id\').value" okText="సరే" cancelText="రద్దు" placeholder="జిల్లాను ఎంచుకోండి">\n          <ion-option *ngFor="let d of personalDistricts" [value]="d.id">{{ d.distrct_nm || d.districtname }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Constituency -->\n      <ion-item class="custom-item">\n        <ion-label stacked>నియోజకవర్గం (Constituency) <span class="req">*</span></ion-label>\n        <ion-select formControlName="constituencyname" (ionChange)="onPersonalConstituencyChange($event)" [disabled]="!entrepreneurForm.get(\'districts\').value" okText="సరే" cancelText="రద్దు" placeholder="నియోజకవర్గం ఎంచుకోండి">\n          <ion-option *ngFor="let c of personalConstituencies" [value]="c.id">{{ c.const_nm || c.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Mandal -->\n      <ion-item class="custom-item">\n        <ion-label stacked>మండలం (Mandal) <span class="req">*</span></ion-label>\n        <ion-select formControlName="mandals" (ionChange)="onPersonalMandalChange($event)" [disabled]="!entrepreneurForm.get(\'constituencyname\').value" okText="సరే" cancelText="రద్దు" placeholder="మండలం ఎంచుకోండి">\n          <ion-option *ngFor="let m of personalMandals" [value]="m.id">{{ m.mndl_nm || m.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Panchayat -->\n      <ion-item class="custom-item">\n        <ion-label stacked>పంచాయతీ / గ్రామం (Panchayat / Village) <span class="req">*</span></ion-label>\n        <ion-select formControlName="panchayati" [disabled]="!entrepreneurForm.get(\'mandals\').value" okText="సరే" cancelText="రద్దు" placeholder="పంచాయతీ ఎంచుకోండి">\n          <ion-option *ngFor="let p of personalPanchayatis" [value]="p.id">{{ p.pnchyt_nm || p.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- SECTION 3: BUSINESS SETUP LOCATION -->\n      <div class="section-heading">3. వ్యాపార ఏర్పాటు చేయు స్థలం (Business Setup Location)</div>\n\n      <!-- Business State -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార రాష్ట్రం (Business State) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_state_id" (ionChange)="onBusinessStateChange($event)" okText="సరే" cancelText="రద్దు" placeholder="రాష్ట్రాన్ని ఎంచుకోండి">\n          <ion-option *ngFor="let s of states" [value]="s.id">{{ s.state_name || s.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Business District -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార జిల్లా (Business District) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_districts" (ionChange)="onBusinessDistrictChange($event)" [disabled]="!entrepreneurForm.get(\'business_state_id\').value" okText="సరే" cancelText="రద్దు" placeholder="జిల్లాను ఎంచుకోండి">\n          <ion-option *ngFor="let d of businessDistricts" [value]="d.id">{{ d.distrct_nm || d.districtname }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Business Constituency -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార నియోజకవర్గం (Business Constituency) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_constituencyname" (ionChange)="onBusinessConstituencyChange($event)" [disabled]="!entrepreneurForm.get(\'business_districts\').value" okText="సరే" cancelText="రద్దు" placeholder="నియోజకవర్గం ఎంచుకోండి">\n          <ion-option *ngFor="let c of businessConstituencies" [value]="c.id">{{ c.const_nm || c.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Business Mandal -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార మండలం (Business Mandal) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_mandals" (ionChange)="onBusinessMandalChange($event)" [disabled]="!entrepreneurForm.get(\'business_constituencyname\').value" okText="సరే" cancelText="రద్దు" placeholder="మండలం ఎంచుకోండి">\n          <ion-option *ngFor="let m of businessMandals" [value]="m.id">{{ m.mndl_nm || m.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Business Panchayat -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార పంచాయతీ (Business Panchayat) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_panchayati" [disabled]="!entrepreneurForm.get(\'business_mandals\').value" okText="సరే" cancelText="రద్దు" placeholder="పంచాయతీ ఎంచుకోండి">\n          <ion-option *ngFor="let p of businessPanchayatis" [value]="p.id">{{ p.pnchyt_nm || p.name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- SECTION 4: BUSINESS TYPE & FINANCE -->\n      <div class="section-heading">4. వ్యాపార రంగం & పెట్టుబడి (Business & Capital)</div>\n\n      <!-- Type of Business -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార రంగం (Type of Business) <span class="req">*</span></ion-label>\n        <ion-select formControlName="business_type_id" okText="సరే" cancelText="రద్దు" placeholder="వ్యాపార రంగాన్ని ఎంచుకోండి">\n          <ion-option *ngFor="let t of businessTypes" [value]="t.id">{{ t.business_type || t.type_english }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Christian Denomination -->\n      <ion-item class="custom-item">\n        <ion-label stacked>క్రైస్తవ డినామినేషన్ (Denomination) <span class="req">*</span></ion-label>\n        <ion-select formControlName="denomination_id" okText="సరే" cancelText="రద్దు" placeholder="డినామినేషన్ ఎంచుకోండి">\n          <ion-option *ngFor="let d of denominations" [value]="d.id">{{ d.denomation_name || d.denomination_name }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- Self Fund -->\n      <ion-item class="custom-item">\n        <ion-label stacked>స్వంత పెట్టుబడి (Self Fund / Own Investment) ₹ <span class="req">*</span></ion-label>\n        <ion-input type="text" formControlName="self_fund" placeholder="ఉదా: 2,00,000"></ion-input>\n      </ion-item>\n\n      <!-- Capital Need -->\n      <ion-item class="custom-item">\n        <ion-label stacked>అవసరమైన పెట్టుబడి (Capital Needed from Investors) ₹ <span class="req">*</span></ion-label>\n        <ion-input type="text" formControlName="capital_need" placeholder="ఉదా: 10,00,000"></ion-input>\n      </ion-item>\n\n      <!-- Description -->\n      <ion-item class="custom-item">\n        <ion-label stacked>వ్యాపార ప్రణాళిక వివరణ (Business Concept / Plan)</ion-label>\n        <ion-textarea rows="3" formControlName="description" placeholder="మీ వ్యాపార ఆలోచన గురించి క్లుప్తంగా వివరించండి..."></ion-textarea>\n      </ion-item>\n\n      <!-- Submit Button -->\n      <button ion-button block type="submit" class="submit-btn">\n        🚀 ఎంటర్‌ప్రెన్యూర్ సబ్మిట్ చేయండి (Submit)\n      </button>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\entrepreneur\entrepreneur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], EntrepreneurPage);
    return EntrepreneurPage;
}());

//# sourceMappingURL=entrepreneur.js.map

/***/ })

});
//# sourceMappingURL=35.js.map