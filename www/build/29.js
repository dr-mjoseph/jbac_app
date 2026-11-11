webpackJsonp([29],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(128);
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





var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, formBuilder, camera, actionSheetCtrl, service, loadingCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.imagesdata = [];
        this.submitted = false;
        this.denomation = [];
        this.districts = [];
        this.constituencies = [];
        this.mandals = [];
        this.panchayats = [];
        this.form = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mobile_number: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[0-9]{10}$/)]],
            denomination_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            state_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            district_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            constituency_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mandal_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            panchayat_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            address: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            help: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    }
    HelpPage.prototype.gotohome = function () {
        this.navCtrl.push('HomePage');
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        this.getdenomations();
    };
    HelpPage.prototype.getdenomations = function () {
        var _this = this;
        this.service.getdenomation().subscribe(function (res) {
            _this.denomation = (res && res.data) ? res.data : (Array.isArray(res) ? res : []);
        }, function () {
            _this.denomation = [];
        });
    };
    HelpPage.prototype.onStateChange = function (stateId) {
        var _this = this;
        this.districts = [];
        this.constituencies = [];
        this.mandals = [];
        this.panchayats = [];
        this.form.patchValue({
            district_id: '',
            constituency_id: '',
            mandal_id: '',
            panchayat_id: ''
        });
        if (stateId) {
            this.service.getdistrict(stateId).subscribe(function (res) {
                _this.districts = (res && res.data) ? res.data : [];
            }, function () {
                _this.districts = [];
            });
        }
    };
    HelpPage.prototype.onDistrictChange = function (districtId) {
        var _this = this;
        this.constituencies = [];
        this.mandals = [];
        this.panchayats = [];
        this.form.patchValue({
            constituency_id: '',
            mandal_id: '',
            panchayat_id: ''
        });
        if (districtId) {
            this.service.getconsistencys(districtId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                var filtered = list.filter(function (item) { return item.dstrct_id == districtId; });
                _this.constituencies = filtered.length > 0 ? filtered : list;
            }, function () {
                _this.constituencies = [];
            });
        }
    };
    HelpPage.prototype.onConstituencyChange = function (constId) {
        var _this = this;
        this.mandals = [];
        this.panchayats = [];
        this.form.patchValue({
            mandal_id: '',
            panchayat_id: ''
        });
        if (constId) {
            this.service.getmandals(constId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                var filtered = list.filter(function (item) { return item.const_id == constId; });
                _this.mandals = filtered.length > 0 ? filtered : list;
            }, function () {
                _this.mandals = [];
            });
        }
    };
    HelpPage.prototype.onMandalChange = function (mandalId) {
        var _this = this;
        this.panchayats = [];
        this.form.patchValue({
            panchayat_id: ''
        });
        if (mandalId) {
            this.service.gepanchayatis(mandalId).subscribe(function (res) {
                var list = (res && res.data) ? res.data : [];
                var filtered = list.filter(function (item) { return item.mndl_id == mandalId; });
                _this.panchayats = filtered.length > 0 ? filtered : list;
            }, function () {
                _this.panchayats = [];
            });
        }
    };
    HelpPage.prototype.numericOnly = function (event) {
        var val = (event && event.target && event.target.value !== undefined) ? String(event.target.value) : '';
        var cleaned = val.replace(/\D/g, '').slice(0, 10);
        if (cleaned !== val) {
            this.form.patchValue({ mobile_number: cleaned });
        }
        return true;
    };
    HelpPage.prototype.triggerFileInput = function () {
        var input = document.getElementById('helpFileInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    HelpPage.prototype.triggerCameraInput = function () {
        var input = document.getElementById('helpCameraInput');
        if (input) {
            input.value = '';
            input.click();
        }
    };
    HelpPage.prototype.onFileSelected = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.zone.run(function () {
                    _this.imagesdata = [{
                            reviewimg: e.target.result,
                            filetype: 'jpeg'
                        }];
                });
            };
            reader.readAsDataURL(file);
        }
    };
    HelpPage.prototype.openphoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                actionSheet = this.actionSheetCtrl.create({
                    title: 'ఫోటో ఎంచుకోండి',
                    buttons: [
                        {
                            icon: 'ios-folder-open',
                            text: 'Gallery',
                            handler: function () {
                                if (!(window.navigator && window.navigator.camera)) {
                                    _this.triggerFileInput();
                                    return;
                                }
                                try {
                                    var options = {
                                        quality: 70,
                                        destinationType: _this.camera.DestinationType.DATA_URL,
                                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                                        saveToPhotoAlbum: false
                                    };
                                    _this.camera.getPicture(options).then(function (imaged) {
                                        _this.zone.run(function () {
                                            var ing = "data:image/jpeg;base64," + imaged;
                                            _this.imagesdata = [{
                                                    reviewimg: ing,
                                                    filetype: 'jpeg'
                                                }];
                                        });
                                    }, function () {
                                        _this.triggerFileInput();
                                    });
                                }
                                catch (err) {
                                    _this.triggerFileInput();
                                }
                            }
                        },
                        {
                            icon: 'ios-camera',
                            text: 'Camera',
                            handler: function () {
                                if (!(window.navigator && window.navigator.camera)) {
                                    _this.triggerCameraInput();
                                    return;
                                }
                                try {
                                    var options = {
                                        quality: 70,
                                        correctOrientation: true,
                                        destinationType: _this.camera.DestinationType.DATA_URL,
                                        encodingType: _this.camera.EncodingType.JPEG,
                                        mediaType: _this.camera.MediaType.PICTURE
                                    };
                                    _this.camera.getPicture(options).then(function (imageD) {
                                        _this.zone.run(function () {
                                            var img = "data:image/jpeg;base64," + imageD;
                                            _this.imagesdata = [{
                                                    reviewimg: img,
                                                    filetype: 'jpeg'
                                                }];
                                        });
                                    }, function () {
                                        _this.triggerCameraInput();
                                    });
                                }
                                catch (err) {
                                    _this.triggerCameraInput();
                                }
                            }
                        },
                        {
                            icon: 'ios-close',
                            text: 'Cancel',
                            role: 'cancel'
                        }
                    ]
                });
                actionSheet.present();
                return [2 /*return*/];
            });
        });
    };
    HelpPage.prototype.resetFormCompletely = function () {
        this.submitted = false;
        this.districts = [];
        this.constituencies = [];
        this.mandals = [];
        this.panchayats = [];
        this.imagesdata = [];
        this.form.reset({
            name: '',
            mobile_number: '',
            denomination_id: '',
            state_id: '',
            district_id: '',
            constituency_id: '',
            mandal_id: '',
            panchayat_id: '',
            address: '',
            help: '',
            description: ''
        });
        var fileEl = document.getElementById('helpFileInput');
        if (fileEl)
            fileEl.value = '';
        var camEl = document.getElementById('helpCameraInput');
        if (camEl)
            camEl.value = '';
    };
    HelpPage.prototype.postmeetings = function () {
        var _this = this;
        this.submitted = true;
        var v = this.form.value;
        if (this.form.invalid ||
            !v.state_id ||
            !v.district_id ||
            !v.constituency_id ||
            !v.mandal_id ||
            !v.panchayat_id) {
            alert('దయచేసి అన్ని వివరాలను మరియు రాష్ట్రం నుండి పంచాయతీ/వార్డు వరకు క్రమంలో ఎంచుకోండి');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'సమర్పించబడుతోంది దయచేసి ఆగండి...'
        });
        loading.present();
        var stateLabel = Number(v.state_id) === 2 ? 'Telangana' : 'Andhra Pradesh';
        var data = {
            usr_id: localStorage.getItem('usr_id'),
            mobile_number: v.mobile_number,
            name: v.name,
            denomination_id: Number(v.denomination_id),
            state_id: Number(v.state_id),
            state: stateLabel,
            district_id: Number(v.district_id),
            constituency_id: Number(v.constituency_id),
            mandal_id: Number(v.mandal_id),
            panchayat_id: Number(v.panchayat_id),
            address: v.address,
            description: v.description,
            help: v.help,
            reviewImg: this.imagesdata
        };
        this.service.posthelping(data).subscribe(function (res) {
            loading.dismiss().catch(function () { });
            if (res && res.status == 200) {
                _this.resetFormCompletely();
                alert('సహాయ అభ్యర్థన విజయవంతముగా నమోదు చేయబడింది');
            }
            else {
                alert('సర్వర్ సమస్య ఏర్పడింది');
            }
        }, function () {
            loading.dismiss().catch(function () { });
            alert('సర్వర్ సమస్య ఏర్పడింది');
        });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\help\help.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="gotohome()">\n        <ion-icon style="font-size: 20px;" name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;"><b>సహాయం కోరండి</b></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="pagecss">\n  <form [formGroup]="form" autocomplete="off">\n    <ion-row>\n      <!-- 1. పూర్తి పేరు -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>పూర్తి పేరు <span style="color:red;">*</span></ion-label>\n          <ion-input type="text" formControlName="name" placeholder="మీ పూర్తి పేరు నమోదు చేయండి"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <!-- 2. మొబైల్ నంబర్ -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>మొబైల్ నంబర్ <span style="color:red;">*</span></ion-label>\n          <ion-input type="tel" maxlength="10" formControlName="mobile_number" (ionInput)="numericOnly($event)" placeholder="10 అంకెల మొబైల్ నంబర్"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <!-- 3. డెనామినేషన్ -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>డెనామినేషన్ <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="denomination_id" okText="సరే" cancelText="రద్దు" placeholder="డెనామినేషన్ ఎంచుకోండి">\n            <ion-option value="" disabled selected>డెనామినేషన్ ఎంచుకోండి</ion-option>\n            <ion-option *ngFor="let item of denomation" [value]="item.id">\n              {{ item.denomation_name || item.denomination_name || item.denomination }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 4. రాష్ట్రం (AP & TG) -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>రాష్ట్రం <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="state_id" okText="సరే" cancelText="రద్దు" placeholder="రాష్ట్రం ఎంచుకోండి" (ionChange)="onStateChange($event)">\n            <ion-option value="" disabled selected>రాష్ట్రం ఎంచుకోండి</ion-option>\n            <ion-option value="1">ఆంధ్రప్రదేశ్</ion-option>\n            <ion-option value="2">తెలంగాణ</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 5. జిల్లా -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>జిల్లా <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="district_id" okText="సరే" cancelText="రద్దు" [disabled]="!form.value.state_id" placeholder="జిల్లాను ఎంచుకోండి" (ionChange)="onDistrictChange($event)">\n            <ion-option value="" disabled selected>జిల్లాను ఎంచుకోండి</ion-option>\n            <ion-option *ngFor="let item of districts" [value]="item.id">\n              {{ item.distrct_nm || item.districtname || item.district_name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 6. నియోజకవర్గం -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>నియోజకవర్గం <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="constituency_id" okText="సరే" cancelText="రద్దు" [disabled]="!form.value.district_id" placeholder="నియోజకవర్గాన్ని ఎంచుకోండి" (ionChange)="onConstituencyChange($event)">\n            <ion-option value="" disabled selected>నియోజకవర్గాన్ని ఎంచుకోండి</ion-option>\n            <ion-option *ngFor="let item of constituencies" [value]="item.id">\n              {{ item.const_nm || item.constituencyname || item.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 7. మండలం -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>మండలం <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="mandal_id" okText="సరే" cancelText="రద్దు" [disabled]="!form.value.constituency_id" placeholder="మండలాన్ని ఎంచుకోండి" (ionChange)="onMandalChange($event)">\n            <ion-option value="" disabled selected>మండలాన్ని ఎంచుకోండి</ion-option>\n            <ion-option *ngFor="let item of mandals" [value]="item.id">\n              {{ item.mndl_nm || item.mandalname || item.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 8. పంచాయతీ / వార్డు / సబ్-వార్డు -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>పంచాయతీ / వార్డు / సబ్-వార్డు <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="panchayat_id" okText="సరే" cancelText="రద్దు" [disabled]="!form.value.mandal_id" placeholder="పంచాయతీ / వార్డును ఎంచుకోండి">\n            <ion-option value="" disabled selected>పంచాయతీ / వార్డును ఎంచుకోండి</ion-option>\n            <ion-option *ngFor="let item of panchayats" [value]="item.id">\n              {{ item.pnchyt_nm || item.panchayatname || item.name }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 9. చిరునామా (Placed after Panchayat/Ward/Sub-Ward) -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>చిరునామా <span style="color:red;">*</span></ion-label>\n          <ion-textarea formControlName="address" placeholder="ఇంటి నంబర్, వీధి, కాలనీ / గ్రామం మొదలైన పూర్తి చిరునామా"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n      <!-- 10. సహాయం రకం -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>సహాయం రకం <span style="color:red;">*</span></ion-label>\n          <ion-select formControlName="help" okText="సరే" cancelText="రద్దు" placeholder="సహాయం రకాన్ని ఎంచుకోండి">\n            <ion-option value="" disabled selected>సహాయం రకాన్ని ఎంచుకోండి</ion-option>\n            <ion-option value="CommunitySupport Help">కమ్యూనిటీ సహాయం</ion-option>\n            <ion-option value="Education Help">విద్య సహాయం</ion-option>\n            <ion-option value="Financial Help">ఆర్థిక సహాయం</ion-option>\n            <ion-option value="ForChurchConstruction Help">చర్చి నిర్మాణం కొరకు సహాయం</ion-option>\n            <ion-option value="Legal Help">న్యాయ సహాయం</ion-option>\n            <ion-option value="Medical Help">వైద్య సహాయం</ion-option>\n            <ion-option value="PoliceDepartmental Help">పోలీస్ డిపార్ట్‌మెంట్ సహాయం</ion-option>\n            <ion-option value="Political Help">రాజకీయ సహాయం</ion-option>\n            <ion-option value="Other Help">ఇతర సహాయం</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <!-- 11. సహాయ వివరాలు / వివరణ -->\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>సహాయ వివరాలు / వివరణ <span style="color:red;">*</span></ion-label>\n          <ion-textarea formControlName="description" placeholder="మీకు అవసరమైన సహాయం గురించి వివరంగా రాయండి"></ion-textarea>\n        </ion-item>\n      </ion-col>\n\n      <!-- 12. చిత్రం అప్‌లోడ్ (ఐచ్ఛికం) -->\n      <ion-col col-12>\n        <div class="imgerdt" style="padding: 12px; text-align: center; border: 2px dashed #00548F; border-radius: 8px; background: #fafafa;">\n          <img src="assets/icon/upload.svg" style="height: 60px; width: 60px; display: block; margin: 0 auto 6px;">\n          <p style="margin: 4px 0 10px; font-weight: bold; color: #00548F; font-size: 14px;">చిత్రం అప్‌లోడ్ (ఐచ్ఛికం)</p>\n          <input type="file" id="helpFileInput" (change)="onFileSelected($event)" accept="image/*" style="display: block; width: 100%; max-width: 290px; margin: 0 auto 10px; padding: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px;">\n          <input type="file" id="helpCameraInput" (change)="onFileSelected($event)" accept="image/*" capture="environment" style="display: none;">\n          <button ion-button small outline icon-start type="button" (click)="openphoto()" style="margin: 0 auto; display: inline-block;">\n            <ion-icon name="camera"></ion-icon> కెమెరా / గ్యాలరీ\n          </button>\n          <div *ngIf="imagesdata.length" style="margin-top: 12px;">\n            <img style="max-height: 200px; max-width: 100%; border-radius: 8px; border: 1px solid #00548F;" [src]="imagesdata[0].reviewimg || imagesdata[0].reviewImg">\n          </div>\n        </div>\n      </ion-col>\n\n      <ion-col col-12 style="text-align: center; margin-top: 15px;">\n        <button ion-button color="secondary" block (click)="postmeetings()" style="letter-spacing: 1px; font-weight: bold;">సమర్పించండి</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rajes\StudioProjects\jbac_app\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=29.js.map