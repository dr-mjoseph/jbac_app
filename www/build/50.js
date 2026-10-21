webpackJsonp([50],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorregisterPageModule", function() { return DoctorregisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctorregister__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DoctorregisterPageModule = /** @class */ (function () {
    function DoctorregisterPageModule() {
    }
    DoctorregisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doctorregister__["a" /* DoctorregisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctorregister__["a" /* DoctorregisterPage */]),
            ],
        })
    ], DoctorregisterPageModule);
    return DoctorregisterPageModule;
}());

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorregisterPage; });
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

var DoctorregisterPage = /** @class */ (function () {
    function DoctorregisterPage(navCtrl, fb, alertCtrl, loadingCtrl, toastCtrl, service) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.showSpinner = false;
        this.doctorForm = this.fb.group({
            doctor_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            license_number: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            specialization: ['Family Counsellor & Clinical Psychologist', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            qualification: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            experience_years: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            phone_number: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            consultation_fee: ['Free / Volunteer Service'],
            available_days: ['Monday to Saturday', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            available_time_start: ['10:00 AM', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            available_time_end: ['05:00 PM', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            location: ['Vijayawada & Online Consultation', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            bio: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            category_id: [8],
            category: ['Doctor']
        });
    }
    DoctorregisterPage.prototype.gotohome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    DoctorregisterPage.prototype.goToLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    DoctorregisterPage.prototype.submitDoctor = function () {
        var _this = this;
        if (this.doctorForm.invalid) {
            var alert_1 = this.alertCtrl.create({
                title: 'వివరాలు అసంపూర్ణం',
                subTitle: 'దయచేసి పేరు, లైసెన్స్ నంబర్, మొబైల్ నంబర్ మరియు పాస్‌వర్డ్ మొదలైన తప్పనిసరి వివరాలను పూరించండి.',
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        this.showSpinner = true;
        var payload = Object.assign({}, this.doctorForm.value, {
            category_id: 8,
            category: 'Doctor'
        });
        this.service.registercouncellingdoctor(payload).subscribe(function (res) {
            _this.showSpinner = false;
            if (res && res.status === 200) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'రిజిస్ట్రేషన్ విజయవంతమైంది! 🎉',
                    subTitle: 'స్వాగతం, ' + payload.doctor_name + '! మీరు ఇప్పుడు మీ మొబైల్ నంబర్ ' + payload.phone_number + ' తో లాగిన్ అయి మీ అపాయింట్‌మెంట్స్ చూడవచ్చు.',
                    buttons: [{
                            text: 'లాగిన్ అవ్వండి (Login)',
                            handler: function () {
                                _this.navCtrl.setRoot('LoginPage');
                            }
                        }]
                });
                alert_2.present();
            }
            else if (res && res.status === 300) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'మొబైల్ నంబర్ ఇప్పటికే ఉంది',
                    subTitle: res.message || 'ఈ మొబైల్ నంబర్‌తో ఇప్పటికే డాక్టర్ అకౌంట్ ఉంది. దయచేసి నేరుగా లాగిన్ అవ్వండి.',
                    buttons: [{
                            text: 'లాగిన్ పేజీకి వెళ్లండి',
                            handler: function () {
                                _this.navCtrl.setRoot('LoginPage');
                            }
                        }]
                });
                alert_3.present();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'లోపం సంభవించింది',
                    subTitle: (res === null || res === void 0 ? void 0 : res.message) || 'రిజిస్ట్రేషన్ పూర్తి కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
                    buttons: ['Ok']
                });
                alert_4.present();
            }
        }, function (err) {
            _this.showSpinner = false;
            var alert = _this.alertCtrl.create({
                title: 'సర్వర్ సమస్య',
                subTitle: 'నెట్‌వర్క్ లోపం సంభవించింది. దయచేసి మీ ఇంటర్నెట్ కనెక్షన్‌ను పరిశీలించి మళ్లీ ప్రయత్నించండి.',
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    DoctorregisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctorregister',
            template: /*ion-inline-start:"C:\\Users\\rajes\\StudioProjects\\jbac_app\\src\\pages\\doctorregister\\doctorregister.html"*/"<ion-header>\n  <ion-navbar color=\"primary\">\n    <ion-title style=\"text-align: center; font-size: 16px;\">\n      <b>డాక్టర్ రిజిస్ట్రేషన్ (Doctor Register)</b>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\"gotohome()\">\n        <ion-icon name=\"home\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=\"pagecss\">\n  <div class=\"form-card\">\n    <div class=\"header-box\">\n      <div style=\"font-size: 32px; margin-bottom: 6px;\">🩺</div>\n      <h3 style=\"margin: 0; font-size: 17px; font-weight: bold;\">క్రైస్తవ వైద్యులు & కౌన్సిలర్ల నమోదు</h3>\n      <p style=\"margin: 4px 0 0 0; font-size: 11.5px; opacity: 0.9;\">\n        JBAC ఫ్యామిలీ కౌన్సిలింగ్ నెట్‌వర్క్‌లో చేరి క్రైస్తవ కుటుంబాలకు సహాయపడండి\n      </p>\n    </div>\n\n    <form [formGroup]=\"doctorForm\" (ngSubmit)=\"submitDoctor()\">\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>డాక్టర్ పూర్తి పేరు (Doctor Full Name) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"doctor_name\" placeholder=\"ఉదా: Dr. Mary Grace, M.D.\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>మెడికల్ కౌన్సిల్ లైసెన్స్ నంబర్ (License No) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"license_number\" placeholder=\"ఉదా: APMC-2015-88421\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>స్పెషలైజేషన్ (Specialization) <span class=\"req\">*</span></ion-label>\n        <ion-select formControlName=\"specialization\" okText=\"ఎంచుకోండి\" cancelText=\"రద్దు\">\n          <ion-option value=\"Family Counsellor & Clinical Psychologist\">Family Counsellor & Clinical Psychologist</ion-option>\n          <ion-option value=\"Marriage & Relationship Counsellor\">Marriage & Relationship Counsellor</ion-option>\n          <ion-option value=\"Youth & Family Mental Wellness Counsellor\">Youth & Family Mental Wellness Counsellor</ion-option>\n          <ion-option value=\"Parent-Child Dynamics Specialist\">Parent-Child Dynamics Specialist</ion-option>\n          <ion-option value=\"Christian Spiritual & Emotional Healing\">Christian Spiritual & Emotional Healing</ion-option>\n          <ion-option value=\"Addiction & Behavioral Therapy\">Addiction & Behavioral Therapy</ion-option>\n          <ion-option value=\"General Family Physician & Counsellor\">General Family Physician & Counsellor</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>విద్యార్హతలు (Qualifications) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"qualification\" placeholder=\"ఉదా: MBBS, M.D., M.Sc Psychology\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>అనుభవం (Years of Experience) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"experience_years\" placeholder=\"ఉదా: 8 Years\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>10 అంకెల మొబైల్ నంబర్ (Mobile Number) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"tel\" maxlength=\"10\" formControlName=\"phone_number\" placeholder=\"10-digit mobile\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>ఈమెయిల్ (Email Address)</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" placeholder=\"doctor@jbac.in\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>పాస్‌వర్డ్ (Password - కనీసం 6 అక్షరాలు) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"password\" maxlength=\"16\" formControlName=\"password\" placeholder=\"లాగిన్ పాస్‌వర్డ్\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>కన్సల్టేషన్ ఫీజు (Consultation Fee)</ion-label>\n        <ion-input type=\"text\" formControlName=\"consultation_fee\" placeholder=\"Free / Volunteer Service\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>అందుబాటులో ఉండే రోజులు (Available Days) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"available_days\" placeholder=\"Monday to Saturday\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>ప్రారంభ సమయం (Start Time) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"available_time_start\" placeholder=\"10:00 AM\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>ముగింపు సమయం (End Time) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"available_time_end\" placeholder=\"05:00 PM\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>ప్రాంతం & కౌన్సిలింగ్ విధానం (Location) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"location\" placeholder=\"ఉదా: Vijayawada & Online\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>పూర్తి క్లినిక్ / చర్చి చిరునామా (Address) <span class=\"req\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"address\" placeholder=\"క్లినిక్ లేదా ఆసుపత్రి చిరునామా\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"custom-item\">\n        <ion-label stacked>డాక్టర్ గురించిన సంక్షిప్త వివరణ (Bio) <span class=\"req\">*</span></ion-label>\n        <ion-textarea rows=\"3\" formControlName=\"bio\" placeholder=\"మీ అనుభవం, కౌన్సిలింగ్ పద్ధతులు మరియు సేవా సంకల్పం...\"></ion-textarea>\n      </ion-item>\n\n      <div style=\"margin-top: 16px;\">\n        <button ion-button block color=\"primary\" type=\"submit\" [disabled]=\"showSpinner\" style=\"border-radius: 8px; font-weight: bold; height: 44px;\">\n          <ion-spinner *ngIf=\"showSpinner\" name=\"crescent\" style=\"margin-right: 8px;\"></ion-spinner>\n          డాక్టర్ రిజిస్ట్రేషన్ పూర్తి చేయండి (Submit)\n        </button>\n      </div>\n\n      <div style=\"text-align: center; margin-top: 14px;\">\n        <span style=\"font-size: 13px; color: #64748b;\">ఇప్పటికే అకౌంట్ ఉందా?</span>\n        <button ion-button clear small color=\"primary\" type=\"button\" (click)=\"goToLogin()\">\n          <b>ఇక్కడ లాగిన్ అవ్వండి (Login)</b>\n        </button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n"/*ion-inline-end:"C:\\Users\\rajes\\StudioProjects\\jbac_app\\src\\pages\\doctorregister\\doctorregister.html"*/
        }),
        __metadata("design:paramtypes", [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]
        ])
    ], DoctorregisterPage);
    return DoctorregisterPage;
}());

/***/ })

});
