webpackJsonp([31],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
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




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, formbuilder, alertCtrl, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.category = '';
        this.password_type = 'password';
        this.shoepass = false;
        this.passloginform = this.formbuilder.group({
            category: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            number: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: [''],
            repassword: ['']
        });
    }
    ForgotPasswordPage.prototype.togglePasswordMode = function () {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    // Accept Input As a Number Only
    ForgotPasswordPage.prototype.numericOnly = function (event) {
        var patt = /^([0-9])$/;
        var result = patt.test(event.key);
        return result;
    };
    ForgotPasswordPage.prototype.gotohome = function () {
        this.navCtrl.push('LoginPage');
    };
    ForgotPasswordPage.prototype.checknumber = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        console.log(this.passloginform.value.number.length == 10);
        if (this.passloginform.value.category == '') {
            this.loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                mode: 'ios',
                title: 'దయచేసి వర్గాన్ని ఎంచుకోండి',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.passloginform.value.number == '') {
            this.loading.dismiss();
            var alert_2 = this.alertCtrl.create({
                mode: 'ios',
                title: 'దయచేసి నంబర్‌ను నమోదు చేయండి',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.passloginform.value.number.length != 10) {
            this.loading.dismiss();
            var alert_3 = this.alertCtrl.create({
                mode: 'ios',
                title: 'ఫోన్ నంబర్‌ను తనిఖీ చేయండి',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            if (this.passloginform.value.category == 1) {
                this.category = 'విశ్వాసి';
            }
            else if (this.passloginform.value.category == 2) {
                this.category = 'విద్యార్థి';
            }
            else if (this.passloginform.value.category == 3) {
                this.category = 'మినిస్ట్రీస్';
            }
            else if (this.passloginform.value.category == 4) {
                this.category = 'పాస్టర్';
            }
            else if (this.passloginform.value.category == 5) {
                this.category = 'చర్చి';
            }
            else if (this.passloginform.value.category == 6) {
                this.category = 'క్రిస్టియన్ ఆర్గనైజెషన్ / కంపెనీ';
            }
            else if (this.passloginform.value.category == 7) {
                this.category = 'పాస్టర్ల అసోసియేషన్';
            }
            this.service.checknumberpassword(this.passloginform.value).subscribe(function (res) {
                if (res.status == 200) {
                    _this.shoepass = true;
                    _this.loading.dismiss();
                    var alert_4 = _this.alertCtrl.create({
                        mode: 'ios',
                        title: 'పాస్వర్డ్ను నమోదు చేయండి',
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
                else {
                    _this.loading.dismiss();
                    var alert_5 = _this.alertCtrl.create({
                        mode: 'ios',
                        title: 'మొబైల్ నంబర్ నమోదు కాలేదు',
                        buttons: ['OK']
                    });
                    alert_5.present();
                }
            });
        }
    };
    ForgotPasswordPage.prototype.submit = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'ప్రాసెస్ అవుతుంది దయచేసి ఆగండి'
        });
        this.loading.present();
        if (this.passloginform.value.password.length < 8 || this.passloginform.value.password.length > 16) {
            this.loading.dismiss();
            var alert_6 = this.alertCtrl.create({
                mode: 'ios',
                title: 'పాస్వర్డ్ను 8 నుండి 16 అక్షరాల మధ్య ఉండాలి',
                buttons: ['OK']
            });
            alert_6.present();
        }
        else if (this.passloginform.value.repassword.length < 8 || this.passloginform.value.repassword.length > 16) {
            var alert_7 = this.alertCtrl.create({
                mode: 'ios',
                title: 'పాస్వర్డ్ మళ్లీ నమోదు 8 నుండి 16 అక్షరాల మధ్య ఉండాలి',
                buttons: ['OK']
            });
            alert_7.present();
            this.loading.dismiss();
        }
        else if (this.passloginform.value.password != this.passloginform.value.repassword) {
            var alert_8 = this.alertCtrl.create({
                mode: 'ios',
                title: 'పాస్‌వర్డ్‌లు సమానంగా లేదు',
                buttons: ['OK']
            });
            alert_8.present();
            this.loading.dismiss();
        }
        else {
            this.service.upadtedpassword(this.passloginform.value).subscribe(function (res) {
                if (res.status == 200) {
                    _this.loading.dismiss();
                    var alert_9 = _this.alertCtrl.create({
                        mode: 'ios',
                        title: 'పాస్‌వర్డ్‌లు విజయవంతంగా నవీకరించబడ్డాయి',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.navCtrl.push('LoginPage');
                                }
                            }
                        ]
                    });
                    alert_9.present();
                }
            });
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="gotohome()">\n\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center;"><b>పాస్వర్డ్ను రీసెట్ చేయండి</b></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="pagecss">\n\n  <form [formGroup]="passloginform">\n\n    <div *ngIf="!shoepass">\n\n      <h4 class="offer1">వర్గం</h4>\n\n      <select placeholder="మొబైల్ నంబర్" class="input" formControlName="category" readonly="shoepass">\n\n        <option value="" disabled selected>వర్గం ఎంచుకోండి</option>\n\n        <option value="1">విశ్వాసి</option>\n\n        <option value="2">విద్యార్థి</option>\n\n        <option value="3">మినిస్ట్రీస్</option>\n\n        <option value="4">పాస్టర్</option>\n\n        <option value="5">చర్చి</option>\n\n        <option value="6">క్రిస్టియన్ ఆర్గనైజెషన్ / కంపెనీ</option>\n\n        <option value="7">పాస్టర్ల అసోసియేషన్</option>\n\n      </select>\n\n    </div>\n\n    <div *ngIf="shoepass">\n\n      <h4 class="offer1">వర్గం</h4>\n\n      <div class="input">{{category}}</div>\n\n    </div>\n\n    <br>\n\n    <h4 class="offer1">మొబైల్ నంబర్</h4>\n\n    <input placeholder="మొబైల్ నంబర్" class="input" type="tel" formControlName="number" (keypress)="numericOnly($event)"\n\n      maxlength="10" minlength="10" [readonly]="shoepass">\n\n    <br>\n\n    <br>\n\n    <button *ngIf="!shoepass" class="sigin-btn" (click)="checknumber()">Check Number </button>\n\n\n\n    <div *ngIf="shoepass">\n\n\n\n      <h4 class="offer1">పాస్వర్డ్</h4>\n\n      <input [type]="password_type" class="input" maxlength="16" minlength="6" formControlName="password">\n\n      <br>\n\n      <br>\n\n\n\n      <h4 class="offer1">పాస్వర్డ్ను మళ్లీ నమోదు చేయండి</h4>\n\n      <input [type]="password_type" class="input" maxlength="16" minlength="6" formControlName="repassword">\n\n      <br>\n\n      <br>\n\n\n\n      <div style="text-align: right;color: white;" class="field-icon" (click)="togglePasswordMode()">\n\n        <ion-icon name="eye"> </ion-icon> పాస్‌వర్డ్ చూపించు\n\n      </div>\n\n\n\n      <button *ngIf="shoepass" class="sigin-btn" (click)="submit()">Submit</button>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=31.js.map