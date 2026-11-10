webpackJsonp([25],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorPageModule", function() { return InvestorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__investor__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvestorPageModule = /** @class */ (function () {
    function InvestorPageModule() {
    }
    InvestorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__investor__["a" /* InvestorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__investor__["a" /* InvestorPage */]),
            ],
        })
    ], InvestorPageModule);
    return InvestorPageModule;
}());

//# sourceMappingURL=investor.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorPage; });
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




var InvestorPage = /** @class */ (function () {
    function InvestorPage(navCtrl, fb, alertCtrl, loadingCtrl, toastCtrl, service) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.showSpinner = false;
        // Location Lists
        this.states = [];
        this.districts = [];
        this.constituencies = [];
        this.mandals = [];
        this.panchayatis = [];
        // Metadata
        this.businessTypes = [];
        this.denominations = [];
        this.investorForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            // Address
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            districts: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            constituencyname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            mandals: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            panchayati: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            // Investment Details
            business_type_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            denomination_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            capital_to_invest: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            description: ['']
        });
    }
    InvestorPage.prototype.ionViewDidLoad = function () {
        this.loadStates();
        this.loadBusinessTypes();
        this.loadDenominations();
    };
    InvestorPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    InvestorPage.prototype.loadStates = function () {
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
    InvestorPage.prototype.loadBusinessTypes = function () {
        var _this = this;
        this.service.getBusinessTypes().subscribe(function (res) {
            if (res && res.data) {
                _this.businessTypes = res.data;
            }
        }, function (err) { return console.log('Error loading business types', err); });
    };
    InvestorPage.prototype.loadDenominations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            if (res && res.data) {
                _this.denominations = res.data;
            }
        }, function (err) { return console.log('Error loading denominations', err); });
    };
    // Address Cascading
    InvestorPage.prototype.onStateChange = function (stateId) {
        var _this = this;
        this.investorForm.patchValue({
            districts: '',
            constituencyname: '',
            mandals: '',
            panchayati: ''
        });
        this.districts = [];
        this.constituencies = [];
        this.mandals = [];
        this.panchayatis = [];
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.districts = (res && res.data) ? res.data : [];
            });
        }
    };
    InvestorPage.prototype.onDistrictChange = function (distId) {
        var _this = this;
        this.investorForm.patchValue({
            constituencyname: '',
            mandals: '',
            panchayati: ''
        });
        this.constituencies = [];
        this.mandals = [];
        this.panchayatis = [];
        if (distId) {
            this.service.getconsistencys(distId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.constituencies = list.filter(function (item) { return item.dstrct_id == distId; });
            });
        }
    };
    InvestorPage.prototype.onConstituencyChange = function (constId) {
        var _this = this;
        this.investorForm.patchValue({
            mandals: '',
            panchayati: ''
        });
        this.mandals = [];
        this.panchayatis = [];
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.mandals = list.filter(function (item) { return item.const_id == constId; });
            });
        }
    };
    InvestorPage.prototype.onMandalChange = function (mandalId) {
        var _this = this;
        this.investorForm.patchValue({
            panchayati: ''
        });
        this.panchayatis = [];
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                _this.panchayatis = list.filter(function (item) { return !mandalId || item.mndl_id == mandalId; });
            });
        }
    };
    InvestorPage.prototype.submitInvestor = function () {
        if (this.investorForm.invalid) {
            var alert_1 = this.alertCtrl.create({
                title: 'దయచేసి అన్ని వివరాలు పూరించండి',
                subTitle: 'Please fill all required fields before submitting.',
                buttons: ['సరే (OK)']
            });
            alert_1.present();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'నమోదు చేయబడుతుంది... (Submitting Investor Profile)...'
        });
        loader.present();
        var formVal = this.investorForm.value;
        var selState = this.states.find(function (s) { return s.id == formVal.state_id; });
        var selDist = this.districts.find(function (d) { return d.id == formVal.districts; });
        var selConst = this.constituencies.find(function (c) { return c.id == formVal.constituencyname; });
        var selMndl = this.mandals.find(function (m) { return m.id == formVal.mandals; });
        var selPanch = this.panchayatis.find(function (p) { return p.id == formVal.panchayati; });
        var selBizType = this.businessTypes.find(function (t) { return t.id == formVal.business_type_id; });
        var selDenom = this.denominations.find(function (d) { return d.id == formVal.denomination_id; });
        var payload = {
            name: formVal.name,
            mobile: formVal.mobile,
            email: formVal.email,
            // Address
            state_id: formVal.state_id,
            state_name: selState ? (selState.state_name || selState.name || '') : '',
            district_id: formVal.districts,
            district_name: selDist ? (selDist.distrct_nm || selDist.districtname || '') : '',
            constituency_id: formVal.constituencyname,
            constituency_name: selConst ? (selConst.const_nm || selConst.name || '') : '',
            mandal_id: formVal.mandals,
            mandal_name: selMndl ? (selMndl.mndl_nm || selMndl.name || '') : '',
            panchayat_id: formVal.panchayati,
            panchayat_name: selPanch ? (selPanch.pnchyt_nm || selPanch.name || '') : '',
            // Investment Details
            business_type_id: formVal.business_type_id,
            business_type: selBizType ? (selBizType.business_type || '') : '',
            denomination_id: formVal.denomination_id,
            denomination: selDenom ? (selDenom.denomation_name || selDenom.denomination_name || '') : '',
            capital_to_invest: formVal.capital_to_invest,
            description: formVal.description
        };
        var self = this;
        this.service.registerInvestor(payload).subscribe(function (res) {
            loader.dismiss();
            if (res && res.status === 200) {
                var successAlert = self.alertCtrl.create({
                    title: 'నమోదు పూర్తయింది! (Success)',
                    subTitle: 'మీ ఇన్వెస్టర్ ప్రొఫైల్ విజయవంతంగా నమోదు చేయబడింది. (Investor registration submitted successfully)',
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
    InvestorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-investor',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\investor\investor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title style="text-align: center; font-size: 15px;">\n\n      <b>ఇన్వెస్టర్ రిజిస్ట్రేషన్ (Investor)</b>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotohome()">\n\n        <ion-icon name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="pagecss">\n\n  <div class="form-card">\n\n    <div class="header-box">\n\n      <div style="font-size: 30px; margin-bottom: 6px;">💰</div>\n\n      <h3 style="margin: 0; font-size: 16px; font-weight: bold;">పెట్టుబడిదారుల నమోదు</h3>\n\n      <p style="margin: 4px 0 0 0; font-size: 11.5px; opacity: 0.9;">\n\n        నూతన వ్యాపార ఆలోచనలలో పెట్టుబడి & భాగస్వామ్యం కొరకు (Angel Investment & Growth)\n\n      </p>\n\n    </div>\n\n\n\n    <form [formGroup]="investorForm" (ngSubmit)="submitInvestor()">\n\n\n\n      <!-- SECTION 1: PERSONAL DETAILS -->\n\n      <div class="section-heading">1. వ్యక్తిగత వివరాలు (Personal Details)</div>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పూర్తి పేరు (Full Name) <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="name" placeholder="ఉదా: John Wesley"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మొబైల్ నంబర్ (Mobile Number) <span class="req">*</span></ion-label>\n\n        <ion-input type="tel" maxlength="10" formControlName="mobile" placeholder="10 అంకెల మొబైల్ నంబర్"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఈమెయిల్ (Email Address)</ion-label>\n\n        <ion-input type="email" formControlName="email" placeholder="investor@example.com"></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- SECTION 2: RESIDENCE ADDRESS -->\n\n      <div class="section-heading">2. నివాస చిరునామా (Residence Address)</div>\n\n\n\n      <!-- State -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>రాష్ట్రం (State) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="state_id" (ionChange)="onStateChange($event)" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let s of states" [value]="s.id">{{ s.state_name || s.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- District -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>జిల్లా (District) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="districts" (ionChange)="onDistrictChange($event)" [disabled]="!investorForm.get(\'state_id\').value" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let d of districts" [value]="d.id">{{ d.distrct_nm || d.districtname }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- Constituency -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>నియోజకవర్గం (Constituency) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="constituencyname" (ionChange)="onConstituencyChange($event)" [disabled]="!investorForm.get(\'districts\').value" okText="సరే" cancelText="రద్దు" placeholder="నియోజకవర్గం ఎంచుకోండి">\n\n          <ion-option *ngFor="let c of constituencies" [value]="c.id">{{ c.const_nm || c.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- Mandal -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>మండలం (Mandal) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="mandals" (ionChange)="onMandalChange($event)" [disabled]="!investorForm.get(\'constituencyname\').value" okText="సరే" cancelText="రద్దు" placeholder="మండలం ఎంచుకోండి">\n\n          <ion-option *ngFor="let m of mandals" [value]="m.id">{{ m.mndl_nm || m.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- Panchayat -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పంచాయతీ / గ్రామం (Panchayat / Village) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="panchayati" [disabled]="!investorForm.get(\'mandals\').value" okText="సరే" cancelText="రద్దు" placeholder="పంచాయతీ ఎంచుకోండి">\n\n          <ion-option *ngFor="let p of panchayatis" [value]="p.id">{{ p.pnchyt_nm || p.name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- SECTION 3: INVESTMENT PREFERENCES -->\n\n      <div class="section-heading">3. పెట్టుబడి ప్రాధాన్యతలు (Investment Preferences)</div>\n\n\n\n      <!-- Interested Business Type -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>ఆసక్తి గల వ్యాపార రంగం (Interested Business Type) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="business_type_id" okText="సరే" cancelText="రద్దు" placeholder="వ్యాపార రంగాన్ని ఎంచుకోండి">\n\n          <ion-option *ngFor="let t of businessTypes" [value]="t.id">{{ t.business_type || t.type_english }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- Christian Denomination -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>క్రైస్తవ డినామినేషన్ (Denomination) <span class="req">*</span></ion-label>\n\n        <ion-select formControlName="denomination_id" okText="సరే" cancelText="రద్దు" placeholder="ఇక్కడ క్లిక్ చేసి ఎంచుకోండి">\n\n          <ion-option *ngFor="let d of denominations" [value]="d.id">{{ d.denomation_name || d.denomination_name }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <!-- Capital to Invest -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పెట్టుబడి పెట్టదలచిన మొత్తం (Capital Willing to Invest) ₹ <span class="req">*</span></ion-label>\n\n        <ion-input type="text" formControlName="capital_to_invest" placeholder="ఉదా: 5,00,000 to 25,00,000"></ion-input>\n\n      </ion-item>\n\n\n\n      <!-- Description -->\n\n      <ion-item class="custom-item">\n\n        <ion-label stacked>పెట్టుబడి ప్రాధాన్యతలు / నిబంధనలు (Investment Criteria)</ion-label>\n\n        <ion-textarea rows="3" formControlName="description" placeholder="భాగస్వామ్య నిబంధనలు లేదా ప్రాధాన్యతల గురించి వివరించండి..."></ion-textarea>\n\n      </ion-item>\n\n\n\n      <!-- Submit Button -->\n\n      <button ion-button block type="submit" class="submit-btn">\n\n        💰 ఇన్వెస్టర్ ప్రొఫైల్ సబ్మిట్ చేయండి (Submit)\n\n      </button>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\investor\investor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], InvestorPage);
    return InvestorPage;
}());

//# sourceMappingURL=investor.js.map

/***/ })

});
//# sourceMappingURL=25.js.map