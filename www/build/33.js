webpackJsonp([33],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFormPageModule", function() { return EntryFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_form__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntryFormPageModule = /** @class */ (function () {
    function EntryFormPageModule() {
    }
    EntryFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entry_form__["a" /* EntryFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entry_form__["a" /* EntryFormPage */]),
            ],
        })
    ], EntryFormPageModule);
    return EntryFormPageModule;
}());

//# sourceMappingURL=entry-form.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryFormPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EntryFormPage = /** @class */ (function () {
    function EntryFormPage(navCtrl, navParams, viewCtrl, formBuilder, service, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isSubmitting = false;
        this.states = [
            { id: 1, state_name: 'ఆంధ్రప్రదేశ్ (Andhra Pradesh - AP)' },
            { id: 2, state_name: 'తెలంగాణ (Telangana - TG)' }
        ];
        this.mandals = [];
        this.constituency = [];
        this.getvillages = [];
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state_id: ['1', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            district_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            constituency_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            mandal_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            village_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['']
        });
        this.getstates();
        this.getdistric(1);
    }
    EntryFormPage.prototype.gotoprivacy = function () {
        this.navCtrl.push('PagesPrivacyPage');
    };
    EntryFormPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EntryFormPage.prototype.getstates = function () {
        var _this = this;
        this.service.getstates().subscribe(function (res) {
            if (res && res.data) {
                _this.states = res.data;
            }
        });
    };
    EntryFormPage.prototype.onStateChange = function (event) {
        this.form.patchValue({
            district_id: '',
            constituency_id: '',
            mandal_id: '',
            village_id: ''
        });
        this.constituency = [];
        this.mandals = [];
        this.getvillages = [];
        this.getdistric(event);
    };
    EntryFormPage.prototype.getdistric = function (stateId) {
        var _this = this;
        var sid = stateId || (this.form.get('state_id') ? this.form.get('state_id').value : 1);
        this.service.getdistrict(sid).subscribe(function (res) {
            _this.districts = res.data;
        });
    };
    EntryFormPage.prototype.getmandals = function (event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
        });
        this.loading.present();
        var id = event;
        this.service.getmandals().subscribe(function (res) {
            _this.mandals = res.data.filter(function (data) { return data.const_id == id; });
            if (_this.mandals.length) {
                _this.loading.dismiss();
                _this.isSubmitting = false;
            }
        });
    };
    EntryFormPage.prototype.getconstency = function (event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
        });
        this.loading.present();
        var id = event;
        this.service.getconsistencys().subscribe(function (res) {
            _this.constituency = res.data.filter(function (data) { return data.dstrct_id == id; });
            if (_this.constituency.length) {
                _this.loading.dismiss();
                _this.isSubmitting = false;
            }
        });
    };
    EntryFormPage.prototype.gepanchayati = function (event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
        });
        this.loading.present();
        var id = event;
        this.service.gepanchayatis().subscribe(function (res) {
            _this.getvillages = res.data.filter(function (data) { return data.mndl_id == id; });
            if (_this.getvillages.length) {
                _this.loading.dismiss();
                _this.isSubmitting = false;
            }
        });
    };
    EntryFormPage.prototype.poorp = function (id) {
        if (id == 1) {
            if (this.form.value.district_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'జిల్లాను ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
                this.form.reset({ name: '', number: '', category: '', district_id: '', constituency_id: '', mandal_id: '', village_id: '', password: '' });
                this.mandals = [];
                this.constituency = [];
                this.getvillages = [];
            }
        }
        else if (id == 2) {
            if (this.form.value.district_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'జిల్లాను ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
            }
            else if (this.form.value.constituency_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'నియోజకవర్గాన్ని ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
            }
        }
        else if (id == 3) {
            if (this.form.value.district_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'జిల్లాను ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
            }
            else if (this.form.value.constituency_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'నియోజకవర్గాన్ని ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
            }
            else if (this.form.value.mandal_id == '') {
                var toast = this.alertCtrl.create({
                    message: 'మండలాన్ని ఎంచుకోండి',
                    mode: 'ios',
                    buttons: ['Ok']
                });
                toast.present();
            }
        }
    };
    EntryFormPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm_1, confirm_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isSubmitting = true;
                        this.loading = this.loadingCtrl.create({
                            spinner: 'ios',
                            content: 'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...'
                        });
                        this.loading.present();
                        if (!this.form.invalid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                mode: 'ios',
                                subTitle: 'దయచేసి ఖాళీ ఫీల్డ్‌లను పూరించండి',
                                buttons: ['OK']
                            })];
                    case 1:
                        confirm_1 = _a.sent();
                        return [4 /*yield*/, confirm_1.present()];
                    case 2:
                        _a.sent();
                        this.loading.dismiss();
                        this.isSubmitting = false;
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.form.value.password.length < 4 || this.form.value.password.length > 16)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertCtrl.create({
                                mode: 'ios',
                                subTitle: 'పాస్వర్డ్ 4 నుండి 16 అక్షరాల మధ్య ఉండాలి',
                                buttons: ['OK']
                            })];
                    case 4:
                        confirm_2 = _a.sent();
                        return [4 /*yield*/, confirm_2.present()];
                    case 5:
                        _a.sent();
                        this.loading.dismiss();
                        this.isSubmitting = false;
                        return [3 /*break*/, 7];
                    case 6:
                        this.service.postinfo(this.form.value).subscribe(function (res) {
                            if (res.status == 200) {
                                var toast = _this.alertCtrl.create({
                                    title: 'రిజిస్ట్రేషన్ విజయవంతం! (Registration Successful)',
                                    message: 'registered successfully, you can login with username and password with the same mobile number and if you want to change you can change while login or by clicking forgot password.\n\nనమోదు విజయవంతంగా పూర్తయింది. మీరు అదే మొబైల్ నంబరును యూజర్‌నేమ్ మరియు పాస్‌వర్డ్‌గా ఉపయోగించి లాగిన్ అవ్వవచ్చు. పాస్‌వర్డ్ మార్చుకోవాలనుకుంటే లాగిన్ సమయంలో లేదా Forgot Password ద్వారా మార్చుకోవచ్చు.',
                                    mode: 'ios',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                _this.navCtrl.push('LoginPage');
                                            }
                                        }
                                    ]
                                });
                                toast.present();
                                _this.loading.dismiss();
                                _this.isSubmitting = false;
                            }
                            else if (res.status == 606) {
                                var confirm_3 = _this.alertCtrl.create({
                                    mode: 'ios',
                                    title: 'ఈ ఫోన్ నెంబర్ తో ఇంతకుముందే యాప్ ఆక్టివేట్ అయినది, లాగిన్ అవ్వండి, ',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                _this.navCtrl.push('LoginPage');
                                            }
                                        }
                                    ]
                                });
                                confirm_3.present();
                                _this.loading.dismiss();
                                _this.isSubmitting = false;
                            }
                            else {
                                var toast = _this.alertCtrl.create({
                                    message: 'Server Error',
                                    mode: 'ios',
                                    buttons: ['OK']
                                });
                                toast.present();
                                _this.loading.dismiss();
                                _this.isSubmitting = false;
                            }
                        });
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    EntryFormPage.prototype.gotologin = function () {
        this.navCtrl.push('LoginPage');
    };
    EntryFormPage.prototype.home = function () {
        this.navCtrl.push('HomePage');
    };
    EntryFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entry-form',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\entry-form\entry-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row style="background-color: #f8f8f8;">\n\n      <ion-col col-11\n\n        style="text-align: center;font-weight: 900;color: #1f376e;">\n\n        JBAC యాప్ యాక్టివేషన్ ఫారమ్\n\n      </ion-col>\n\n      <!-- <ion-col col-1 (click)="closeModal()">\n\n        <ion-icon style="color:1f376e" name="home"></ion-icon>\n\n      </ion-col> -->\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <form [formGroup]="form" class="form" style="background-color: #1f376e;">\n\n    <ion-row>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked >మీ క్యాటగిరి ఎంచుకోండి</ion-label>\n\n          <ion-select formControlName="category">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</ion-option>\n\n            <ion-option value="1">విశ్వాసి</ion-option>\n\n            <ion-option value="2">విద్యార్థి</ion-option>\n\n            <ion-option value="3">మినిస్ట్రీస్ (ఎక్కువ చర్చిలు ఉంటే)</ion-option>\n\n            <ion-option value="4">పాస్టర్</ion-option>\n\n            <ion-option value="5">చర్చి</ion-option>\n\n            <ion-option value="6">క్రిస్టియన్ ఆర్గనైజెషన్ / కంపెనీ</ion-option>\n\n             <ion-option value="7">పాస్టర్ల అసోసియేషన్</ion-option> \n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ పేరు(ఇంటి పేరు తో సహా) </ion-label>\n\n          <ion-input type="text" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" formControlName="name"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మీ ఫోన్ నంబర్ (10 అంకెలు మాత్రమే, లాగిన్ కు ఫోన్ నెంబర్ & పాస్వర్డ్ అవసరము)</ion-label>\n\n          <ion-input type="tel" placeholder="ఇక్కడ క్లిక్ చేసి ఎంటర్ చేయండి" formControlName="number" maxlength="10"\n\n            minlength="10"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>సెట్ పాస్వర్డ్ (కనీసము 4 నుంచి గరిష్టం 16 నెంబర్, అక్షరాల వరకు పెట్టుకోవచ్చు)</ion-label>\n\n          <ion-input type="password" placeholder="ఇక్కడ క్లిక్ చేసి పాస్‌వర్డ్ సెట్ చేసుకోండి" formControlName="password" maxlength="16"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <h4 Style="color:whitesmoke;text-align: center;font-weight: 600;">మీ అడ్రస్</h4>\n\n        <ion-item>\n\n          <ion-label stacked>రాష్ట్రం / State</ion-label>\n\n          <ion-select formControlName="state_id" (ionChange)="onStateChange($event)">\n\n            <ion-option *ngFor="let s of states" [value]="s.id">{{s.state_name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>జిల్లా</ion-label>\n\n          <ion-select formControlName="district_id" (ionChange)="getconstency($event)" >\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి జిల్లా ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of districts" [value]="item.id">{{item.distrct_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>నియోజకవర్గం</ion-label>\n\n          <ion-select formControlName="constituency_id" (ionChange)="getmandals($event)" (click)="poorp(1)">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి నియోజకవర్గం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of constituency" [value]="item.id">{{item.const_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>మండలం / మున్సిపాలిటీ</ion-label>\n\n          <ion-select formControlName="mandal_id" (ionChange)="gepanchayati($event);" (click)="poorp(2)">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి మండలం ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of mandals" [value]="item.id">{{item.mndl_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-12>\n\n        <ion-item>\n\n          <ion-label stacked>పంచాయితీ / వార్డ్ నంబర్</ion-label>\n\n          <ion-select formControlName="village_id" (click)="poorp(3)">\n\n            <ion-option value="" disabled selected>ఇక్కడ క్లిక్ చేసి పంచాయితీ ఎంచుకోండి</ion-option>\n\n            <ion-option *ngFor="let item of getvillages" [value]="item.id">{{item.pnchyt_nm}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    \n\n     \n\n      <ion-row class="button">\n\n      \n\n        <button ion-button color="secondary" (click)="submit()" [disabled]="isSubmitting">\n\n          <ion-spinner *ngIf="isSubmitting" name="crescent" style="width:16px;height:16px;vertical-align:middle;margin-right:6px;"></ion-spinner>\n\n          <b>{{ isSubmitting ? \'దయచేసి వేచి ఉండండి, ప్రాసెస్ అవుతోంది...\' : \'సబ్మిట్\' }}</b>\n\n        </button>\n\n      \n\n    </ion-row>\n\n    \n\n      <p >ఇంతకుముందే రిజిస్టర్ ఐతే <a (click)="gotologin()">లాగిన్  కొరకు క్లిక్</a></p>\n\n     \n\n       <p > <a (click)="gotoprivacy()">Privacy Policy</a></p> \n\n       <br><br>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\entry-form\entry-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], EntryFormPage);
    return EntryFormPage;
}());

//# sourceMappingURL=entry-form.js.map

/***/ })

});
//# sourceMappingURL=33.js.map